import { StringValue, Int64Value, BoolValue } from 'google-protobuf/google/protobuf/wrappers_pb';
import * as grpc from 'grpc';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { NprDecimalValue, PassportInfo } from './nx_types/common_pb';

/**Gets the passport info to be used inside requests
 * @function getPassport
 * @param repositoryname - The repository name
 * @param repositoryid - The repository id
 * @param entityid - The entity id
 * @param branchid - The branch id
 * @returns {PassportInfo} - The passport info
 */
export const getPassport = (repositoryname?: string, repositoryid?: number, entityid?: number, branchid?: number): PassportInfo => {
    const passport = new PassportInfo();

    if (repositoryname) passport.setRepositoryname(new StringValue().setValue(repositoryname));

    if (repositoryid) passport.setRepositoryid(new Int64Value().setValue(repositoryid));

    if (entityid) passport.setEntityid(new Int64Value().setValue(entityid));

    if (branchid) passport.setBranchid(new Int64Value().setValue(branchid));

    return passport;
};

export const getNxChannelCredentials = (rootCert: Buffer, token?: string): grpc.ChannelCredentials =>
    token && token?.length > 0
        ? grpc.credentials.combineChannelCredentials(
              grpc.credentials.createSsl(rootCert),
              grpc.credentials.createFromMetadataGenerator((params, callback) => {
                  const md = new grpc.Metadata();
                  md.set('authorization', 'Bearer ' + token);
                  return callback(null, md);
              })
          )
        : grpc.credentials.createSsl(rootCert);

export const nxValues = {
    toNprDecimal: (amount: number): NprDecimalValue => {
        // Split the string on a decimal point, if present
        const p = amount.toString();
        const pa = p.split('.');
        const units = Number(pa[0]);

        // If we had something after the decimal point, add enough 0s to
        // make sure it represents nanos, then turn it into a number
        // by parsing it as a base-10 integer.
        let nanos = 0;
        if (pa.length > 1) {
            let ns = pa[1] + '000000000';
            ns = ns.substring(0, 9);
            nanos = parseInt(ns, 10);
        }

        return new NprDecimalValue().setUnits(units).setNanos(nanos);
    },
    toTimestamp: (inputDate?: Date): Timestamp | null => (inputDate ? Timestamp.fromDate(new Date(inputDate)) : null),

    toDate: (timestamp: Timestamp.AsObject): Date => new Date(timestamp.seconds * 1000 + timestamp.nanos / 1e6),

    toNumber: (decimalAmount: NprDecimalValue.AsObject): number => {
        // Split the string on a decimal point, if present
        if (decimalAmount == undefined) return 0;
        if ((decimalAmount?.nanos ?? 0) + (decimalAmount?.units ?? 0) == 0) return 0;
        const nanosAmount = decimalAmount?.nanos / Math.pow(10, 9);
        return decimalAmount.units + nanosAmount;
    },
    toInt64Value: (value: number): Int64Value => new Int64Value().setValue(value),
    toStringValue: (value: string): StringValue => new StringValue().setValue(value),
    toBoolValue: (value: boolean): BoolValue => new BoolValue().setValue(value)
};
