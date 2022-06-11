import { AppInfoServiceClient } from '../nx_types/info_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { AppLogoMessage, VersionInfoMessage } from '../nx_types/info_pb';
import * as grpc from 'grpc';

/**Handles App info services required in NX Server */

export class NxAppInfoServices {
    /**Gets the app version from the server
     * @function appVersion
     * @param client app info service client
     * @returns app version message
     */
    public static appVersion = (client: AppInfoServiceClient): Promise<VersionInfoMessage> =>
        new Promise<VersionInfoMessage>((resolve, reject) =>
            client.appVersion(new Empty(), (err, user) => {
                if (err) reject(err);
                else resolve(user);
            })
        );

    public static x = (client: AppInfoServiceClient, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<AppLogoMessage> =>
        client.appLogoStream(new Empty(), options);

    //    options?: Partial<grpc.CallOptions>;

    /**
		 * public appLogoStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<info_pb.AppLogoMessage>;
    public appLogoStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<info_pb.AppLogoMessage>;
		 */
}

/**
 service AppPingService{
      rpc AppPing (AppPingRequest) returns (AppPingReply);
      rpc AppPingStream (AppPingRequest) returns (stream AppPingReply);

}

service AppInfoService{
	rpc AppVersion (google.protobuf.Empty) returns (VersionInfoMessage);
	rpc AppLogoStream (google.protobuf.Empty) returns (stream AppLogoMessage);
}
 */
