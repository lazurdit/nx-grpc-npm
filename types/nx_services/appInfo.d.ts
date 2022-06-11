import { AppInfoServiceClient } from '../../nx_types/info_grpc_pb';
import { VersionInfoMessage } from '../../nx_types/info_pb';
/**Handles App info services required in NX Server */
export declare class NxAppInfoServices {
    /**Gets the app version from the server
     * @function appVersion
     * @param client app info service client
     * @returns app version message
     */
    static appVersion: (client: AppInfoServiceClient) => Promise<VersionInfoMessage>;
}
