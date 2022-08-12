// import grpc from 'grpc';

// import { AuthorizeServiceClient } from './nx_types/auth_grpc_pb';
// import { NxAccountNodeServiceClient } from './nx_types/erp/acct_grpc_pb';
// import {} from './nx_types/erp/acct2_grpc_pb';
// import { AppInfoServiceClient } from './nx_types/info_grpc_pb';

// /**Gets the authorize service client credentials
//  * @function channelCredentials
//  * @param rootCert root cert
//  * @param token token
//  * @returns authorize service client credentials
//  */
// const channelCredentials = (rootCert: Buffer, token?: string): grpc.ChannelCredentials =>
//     token && token?.length > 0
//         ? grpc.credentials.combineChannelCredentials(
//               grpc.credentials.createSsl(rootCert),
//               grpc.credentials.createFromMetadataGenerator((params, callback) => {
//                   const md = new grpc.Metadata();
//                   md.set('authorization', 'Bearer ' + token);
//                   return callback(null, md);
//               })
//           )
//         : grpc.credentials.createSsl(rootCert);

// //client options, to be overiden in real environment
// const options = {
//     'grpc.ssl_target_name_override': 'localhost',
//     'grpc.default_authority': 'localhost'
// };

// /**Gets the authorize service client
//  * @function getAuthorizeServiceClient
//  * @param clientUrl client url
//  * @param rootCert root cert
//  * @param token token
//  * @returns authorize service client
//  */
// export const createAuthorizeServiceClient = (clientUrl: string, rootCert: Buffer, token?: string) =>
//     new AuthorizeServiceClient(clientUrl, channelCredentials(rootCert, token), options);

// /**Gets the app info service client
//  * @function getAppInfoServiceClient
//  * @param clientUrl client url
//  * @param rootCert root cert
//  * @param token token
//  * @returns app info service client
//  */
// export const createAppInfoServiceClient = (clientUrl: string, rootCert: Buffer, token?: string) =>
//     new AppInfoServiceClient(clientUrl, channelCredentials(rootCert, token), options);

// /**Gets the account node service client
//  * @function getAccountNodeServiceClient
//  * @param clientUrl client url
//  * @param rootCert root cert
//  * @param token token
//  * @returns account node service client
//  */
// export const createNxAccountNodeServiceClient = (clientUrl: string, rootCert: Buffer, token?: string) =>
//     new NxAccountNodeServiceClient(clientUrl, channelCredentials(rootCert, token), options);

// export const getChannelCredentials = channelCredentials;
