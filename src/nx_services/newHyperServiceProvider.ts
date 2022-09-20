import { ResponseStatus } from '../nx_types/common_pb';
import { NxNewHyperServicesClient } from '../nx_types/erp/acct2_grpc_pb';
import * as grpc from 'grpc';

import {
    HprCartInput,
    HprDeliveryCostResponse,
    HprIDRequest,
    HprCategoryModelListResponse,
    HprIdsRequest,
    HprCreateCouponDto,
    HprCouponListResponse,
    HprApplyCouponRequest,
    HprApplyCouponResponse,
    HprCalculateOrderTaxesRequest,
    HprCalculateOrderTaxesResponse,
    HprUpdateCouponDto,
    HprGlobalCategory,
    HprOptionalIDRequest,
    HprSearchAllGlobalCategoryRequest,
    HprUpdateGlobalCategoryDto,
    HprItemListModelListResponse,
    HprItemModelListResponse,
    HprProductListResponse,
    HprFullProductResponse,
    HprProductAddRequest,
    HprUpdateProductDto,
    HprItemOption,
    HprItemOptionResponse,
    HprItemOptionListResponse,
    HprUpdateOptionsDto,
    HprItemAdditionListResponse,
    HprItemAddition,
    HprItemAdditionResponse,
    HprUpdateAdditionsDto,
    HprItemImage,
    HprItemImageListResponse,
    HprFullItemListResponse,
    HprCreateUnitDto,
    HprUpdateUnitDto,
    HprUnitModelListResponse,
    HprShopLocation,
    HprShopLocationListResponse,
    HprShopSettingsResponse,
    HprUpdateStoreSettingDto,
    HprFindManyShopListByShopIdRequest,
    HprShopListModelListResponse,
    HprOrderCartListResponse,
    HprShopSearchRequest,
    HprItemSearchRequest,
    HprSetEntityGlobalCategoryArchiveRequest,
    HprSetEntityGlobalCategoryArchiveResponse,
    HprSetEntityArchiveRequest,
    HprSetEntityArchiveResponse,
    HprCreateStoreRequest,
    HprSetShopAvailabilityRequest,
    HprSetShopAvailabilityResponse,
    HprApplyGlobalCategoryOnShopRequest,
    HprApplyGlobalCategoryOnShopResponse,
    HprCreateOrderRequest,
    HprCreateOrderResponse,
    HprCloneTemplateRequest,
    HprShopCategoryCreateResponse,
    HprShopCategoryCreateRequest,
    HprShopCategoryUpdateRequest,
    HprShopCategoryUpdateResponse,
    HprCloneEntityDataRequest
} from '../nx_types/erp/acct2_pb';
import { NprRecordAddResponse, NprRecordUpdateResponse } from '../nx_types/erp/acct_pb';

export type newHyperServiceProviderOptions = {
    clientUrl: string;
    channelCredentials: grpc.ChannelCredentials;
    serviceClientOptions: object;
};

const defaultNewHyperServiceProviderOptions: newHyperServiceProviderOptions = {
    clientUrl: null,
    channelCredentials: null,
    serviceClientOptions: {
        'grpc.ssl_target_name_override': 'localhost',
        'grpc.default_authority': 'localhost'
    }
};

export class newHyperServiceProvider {
    /**
     *
     */
    constructor(options?: newHyperServiceProviderOptions) {
        this.options = options ?? defaultNewHyperServiceProviderOptions;
    }
    public options: newHyperServiceProviderOptions;

    public getNxNewHyperServicesClient() {
        return new NxNewHyperServicesClient(this.options.clientUrl, this.options.channelCredentials, this.options.serviceClientOptions);
    }

    public CalculateCartDeliveryCost(hprCartInput: HprCartInput): Promise<HprDeliveryCostResponse> {
        return new Promise<HprDeliveryCostResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.calculateCartDeliveryCost(hprCartInput, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findCategoryByID(hprIDRequest: HprIDRequest): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findCategoryByID(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    public findAllShopCategories(hprIDRequest: HprIDRequest): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllShopCategories(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findCategoriesByParentId(hprIDRequest: HprIDRequest): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findCategoriesByParentId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findCategoriesByIds(hprIdsRequest: HprIdsRequest): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findCategoriesByIds(hprIdsRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createCoupon(hprCreateCouponDto: HprCreateCouponDto): Promise<NprRecordAddResponse> {
        return new Promise<NprRecordAddResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createCoupon(hprCreateCouponDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllCouponByShopId(hprIDRequest: HprIDRequest): Promise<HprCouponListResponse> {
        return new Promise<HprCouponListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllCouponByShopId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findOneCouponById(hprIDRequest: HprIDRequest): Promise<HprCouponListResponse> {
        return new Promise<HprCouponListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findOneCouponById(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public applyCoupon(hprApplyCouponRequest: HprApplyCouponRequest): Promise<HprApplyCouponResponse> {
        return new Promise<HprApplyCouponResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.applyCoupon(hprApplyCouponRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public calculateOrderTaxes(hprApplyCouponRequest: HprCalculateOrderTaxesRequest): Promise<HprCalculateOrderTaxesResponse> {
        return new Promise<HprCalculateOrderTaxesResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.calculateOrderTaxes(hprApplyCouponRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateCoupon(hprUpdateCouponDto: HprUpdateCouponDto): Promise<NprRecordUpdateResponse> {
        return new Promise<NprRecordUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateCoupon(hprUpdateCouponDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeCoupon(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeCoupon(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createGlobalCategory(hprGlobalCategory: HprGlobalCategory): Promise<NprRecordAddResponse> {
        return new Promise<NprRecordAddResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createGlobalCategory(hprGlobalCategory, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllGlobalCategory(optionalIdRequiest: HprOptionalIDRequest): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllGlobalCategory(optionalIdRequiest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public searchAllGlobalCategory(
        hprSearchAllGlobalCategoryRequest: HprSearchAllGlobalCategoryRequest
    ): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.searchAllGlobalCategory(hprSearchAllGlobalCategoryRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeGlobalCategory(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeGlobalCategory(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findOneGlobalCategory(hprIDRequest: HprIDRequest): Promise<HprCategoryModelListResponse> {
        return new Promise<HprCategoryModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findOneGlobalCategory(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateGlobalCategory(hprUpdateGlobalCategoryDto: HprUpdateGlobalCategoryDto): Promise<NprRecordUpdateResponse> {
        return new Promise<NprRecordUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateGlobalCategory(hprUpdateGlobalCategoryDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findManyItemListByShop(hprIDRequest: HprIDRequest): Promise<HprItemListModelListResponse> {
        return new Promise<HprItemListModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findManyItemListByShop(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findManyItemsByShopId(hprIDRequest: HprIDRequest): Promise<HprItemModelListResponse> {
        return new Promise<HprItemModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findManyItemsByShopId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllProductByShopId(hprIDRequest: HprIDRequest): Promise<HprProductListResponse> {
        return new Promise<HprProductListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllProductByShopId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findByIdItems(hprIDRequest: HprIDRequest): Promise<HprItemModelListResponse> {
        return new Promise<HprItemModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findByIdItems(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findOneProductById(hprIDRequest: HprIDRequest): Promise<HprFullProductResponse> {
        return new Promise<HprFullProductResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findOneProductById(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeProduct(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeProduct(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createProduct(hprProductAddRequest: HprProductAddRequest): Promise<HprFullProductResponse> {
        return new Promise<HprFullProductResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createProduct(hprProductAddRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateProduct(hprUpdateProductDto: HprUpdateProductDto): Promise<HprFullProductResponse> {
        return new Promise<HprFullProductResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateProduct(hprUpdateProductDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createProductOption(hprItemOption: HprItemOption): Promise<HprItemOptionResponse> {
        return new Promise<HprItemOptionResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createProductOption(hprItemOption, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllProductOptionsByProdctId(hprIDRequest: HprIDRequest): Promise<HprItemOptionListResponse> {
        return new Promise<HprItemOptionListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllProductOptionsByProdctId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeProductOptions(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeProductOptions(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateProductOption(hprUpdateOptionsDto: HprUpdateOptionsDto): Promise<NprRecordUpdateResponse> {
        return new Promise<NprRecordUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateProductOption(hprUpdateOptionsDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllProductAdditionsByProdctId(hprIDRequest: HprIDRequest): Promise<HprItemAdditionListResponse> {
        return new Promise<HprItemAdditionListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllProductAdditionsByProdctId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeProductAdditions(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeProductAdditions(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createProductAddition(hprItemAddition: HprItemAddition): Promise<HprItemAdditionResponse> {
        return new Promise<HprItemAdditionResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createProductAddition(hprItemAddition, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateProductAddition(hprUpdateAdditionsDto: HprUpdateAdditionsDto): Promise<NprRecordUpdateResponse> {
        return new Promise<NprRecordUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateProductAddition(hprUpdateAdditionsDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createProductFile(hprItemImage: HprItemImage): Promise<NprRecordAddResponse> {
        return new Promise<NprRecordAddResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createProductFile(hprItemImage, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllProductFilesByProductId(hprIDRequest: HprIDRequest): Promise<HprItemImageListResponse> {
        return new Promise<HprItemImageListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllProductFilesByProductId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeProductFile(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeProductFile(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findManyProductsByShopId(hprIDRequest: HprIDRequest): Promise<HprFullItemListResponse> {
        return new Promise<HprFullItemListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findManyProductsByShopId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createUnit(hprCreateUnitDto: HprCreateUnitDto): Promise<NprRecordAddResponse> {
        return new Promise<NprRecordAddResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createUnit(hprCreateUnitDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeUnit(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeUnit(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateUnit(hprUpdateUnitDto: HprUpdateUnitDto): Promise<NprRecordUpdateResponse> {
        return new Promise<NprRecordUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateUnit(hprUpdateUnitDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllUnitsByShopId(hprIDRequest: HprIDRequest): Promise<HprUnitModelListResponse> {
        return new Promise<HprUnitModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllUnitsByShopId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findOneUnit(hprIDRequest: HprIDRequest): Promise<HprUnitModelListResponse> {
        return new Promise<HprUnitModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findOneUnit(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createStoreSettingLocation(hprShopLocation: HprShopLocation): Promise<NprRecordAddResponse> {
        return new Promise<NprRecordAddResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createStoreSettingLocation(hprShopLocation, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findStoreSettingLocationsByStoreId(hprIDRequest: HprIDRequest): Promise<HprShopLocationListResponse> {
        return new Promise<HprShopLocationListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findStoreSettingLocationsByStoreId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findOneStoreSettingByStoreId(hprIDRequest: HprIDRequest): Promise<HprShopSettingsResponse> {
        return new Promise<HprShopSettingsResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findOneStoreSettingByStoreId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateStoreSetting(hprUpdateStoreSettingDto: HprUpdateStoreSettingDto): Promise<NprRecordUpdateResponse> {
        return new Promise<NprRecordUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateStoreSetting(hprUpdateStoreSettingDto, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeStoreSettingLocation(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeStoreSettingLocation(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findManyShopListByShopId(
        hprFindManyShopListByShopIdRequest: HprFindManyShopListByShopIdRequest
    ): Promise<HprShopListModelListResponse> {
        return new Promise<HprShopListModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findManyShopListByShopId(hprFindManyShopListByShopIdRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findAllOrdersByShopId(hprIDRequest: HprIDRequest): Promise<HprOrderCartListResponse> {
        return new Promise<HprOrderCartListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findAllOrdersByShopId(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findOneOrderById(hprIDRequest: HprIDRequest): Promise<HprOrderCartListResponse> {
        return new Promise<HprOrderCartListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findOneOrderById(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public searchShops(shopSearchRequest: HprShopSearchRequest): Promise<HprShopListModelListResponse> {
        return new Promise<HprShopListModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.searchShops(shopSearchRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public searchProducts(itemSearchRequest: HprItemSearchRequest): Promise<HprProductListResponse> {
        return new Promise<HprProductListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.searchProducts(itemSearchRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public searchItems(itemSearchRequest: HprItemSearchRequest): Promise<HprItemListModelListResponse> {
        return new Promise<HprItemListModelListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.searchItems(itemSearchRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public findByIdFullItems(hprIDRequest: HprIDRequest): Promise<HprFullItemListResponse> {
        return new Promise<HprFullItemListResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.findFullItemById(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public setStoreGlobalCategoryArchive(
        hprSetEntityGlobalCategoryArchiveRequest: HprSetEntityGlobalCategoryArchiveRequest
    ): Promise<HprSetEntityGlobalCategoryArchiveResponse> {
        return new Promise<HprSetEntityGlobalCategoryArchiveResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.setStoreGlobalCategoryArchive(hprSetEntityGlobalCategoryArchiveRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public setStoreArchive(hprSetEntityArchiveRequest: HprSetEntityArchiveRequest): Promise<HprSetEntityArchiveResponse> {
        return new Promise<HprSetEntityArchiveResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.setStoreArchive(hprSetEntityArchiveRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createStore(hprCreateStoreRequest: HprCreateStoreRequest): Promise<NprRecordAddResponse> {
        return new Promise<NprRecordAddResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createStore(hprCreateStoreRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public setShopAvailability(hprSetShopAvailabilityRequest: HprSetShopAvailabilityRequest): Promise<HprSetShopAvailabilityResponse> {
        return new Promise<HprSetShopAvailabilityResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.setShopAvailability(hprSetShopAvailabilityRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public ApplyGlobalCategoryOnShop(
        hprApplyGlobalCategoryOnShopRequest: HprApplyGlobalCategoryOnShopRequest
    ): Promise<HprApplyGlobalCategoryOnShopResponse> {
        return new Promise<HprApplyGlobalCategoryOnShopResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.applyGlobalCategoryOnShop(hprApplyGlobalCategoryOnShopRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createOrder(hprCreateOrderRequest: HprCreateOrderRequest): Promise<HprCreateOrderResponse> {
        return new Promise<HprCreateOrderResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createOrder(hprCreateOrderRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public deleteOrder(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.deleteOrder(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public cloneTemplate(hprCloneTemplateRequest: HprCloneTemplateRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.cloneTemplate(hprCloneTemplateRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public createShopCategory(hprShopCategoryCreateRequest: HprShopCategoryCreateRequest): Promise<HprShopCategoryCreateResponse> {
        return new Promise<HprShopCategoryCreateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.createShopCategory(hprShopCategoryCreateRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateShopCategory(hprShopCategoryUpdateRequest: HprShopCategoryUpdateRequest): Promise<HprShopCategoryUpdateResponse> {
        return new Promise<HprShopCategoryUpdateResponse>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.updateShopCategory(hprShopCategoryUpdateRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public removeShopCategory(hprIDRequest: HprIDRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.removeShopCategory(hprIDRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    /**Clones an entity items to a specific entity
     * @param hprCloneEntityDataRequest
     * @returns result status
     */
    public cloneEntity(hprCloneEntityDataRequest: HprCloneEntityDataRequest): Promise<ResponseStatus> {
        return new Promise<ResponseStatus>((resolve, reject) => {
            const client = this.getNxNewHyperServicesClient();

            client.cloneEntityData(hprCloneEntityDataRequest, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
