//
//  DFPInitializer.m
//  ReactSample
//
//  Created by Matt Murray on 4/21/20.
//  Copyright © 2020 Nativo. All rights reserved.
//

#import "DFPInitializer.h"
#import <objc/runtime.h>
#import <React/RCTLog.h>

@import NativoSDK;
@import GoogleMobileAds;
static NSString * const PublicationDomain = @"http://www.nativo.net/mobiledfptest";

@interface DFPInitializer () <GADBannerViewDelegate, GADAdSizeDelegate, GADAppEventDelegate>
@property (nonatomic) UIViewController *rootVC;
@end

@implementation DFPInitializer

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadBanner:(nonnull id)index)
{
  // Load data into DFPBannerView & start request
  [self requestBanner:index];  
}

- (void)requestBanner:(NSNumber *)index {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIWindow *window = [[UIApplication sharedApplication].delegate window];
    self.rootVC = window.rootViewController;
    DFPBannerView *dfpBanner = [[DFPBannerView alloc] initWithAdSize:GADAdSizeFromCGSize(CGSizeMake(3, 3))];
    [self.rootVC.view addSubview:dfpBanner];
    dfpBanner.adUnitID = @"/416881364/AdUnitSDK";
    dfpBanner.validAdSizes = @[NSValueFromGADAdSize(GADAdSizeFromCGSize(kGADAdSizeNativoDefault)),      // Nativo ad size
                                     NSValueFromGADAdSize(kGADAdSizeBanner)];  // Banner ad size
    dfpBanner.rootViewController = self.rootVC;
    dfpBanner.delegate = self;
    dfpBanner.adSizeDelegate = self;
    dfpBanner.appEventDelegate = self;

    // Set custom targeting for Nativo on DFP request (Get from representative at Nativo)
    DFPRequest *request = [DFPRequest request];
    request.customTargeting = @{ @"ntvPlacement" : @"991150" };
    
    [dfpBanner loadRequest:request];
    objc_setAssociatedObject(dfpBanner, @selector(requestBanner:), index, OBJC_ASSOCIATION_RETAIN);
  });
}



#pragma mark - GAD BannerViewDelegate

- (void)adViewDidReceiveAd:(GADBannerView *)bannerView {
  
    // Check size to determine what type of ad was returned
    if (GADAdSizeEqualToSize(bannerView.adSize, GADAdSizeFromCGSize(kGADAdSizeNativoDefault))) {
        // Since 3x3 is the size of our Nativo ads, we pass this bannerView to Nativo where they will return the appropriate ad
        bannerView.hidden = YES;
        id index = objc_getAssociatedObject(bannerView, @selector(requestBanner:));
        [NativoSDK makeGAMRequestWithBannerView:bannerView forSection:PublicationDomain atLocationIdentifier:index];
        NSLog(@"NativoSDK: GAM Did recieve Nativo ad %@", index);
    } else {
        NSLog(@"NativoSDK::GAM Did recieve GAM banner ad");
        bannerView.hidden = NO;
    }
}

/// Tells the delegate that an ad request failed. The failure is normally due to network
- (void)adView:(GADBannerView *)bannerView didFailToReceiveAdWithError:(GADRequestError *)error {
    NSLog(@"NativoSDK: GAM Error - %@", error);
}

- (void)adView:(GADBannerView *)banner
didReceiveAppEvent:(NSString *)name
      withInfo:(NSString *GAD_NULLABLE_TYPE)info {
    NSLog(@"NativoSDK: GAM Banner Event: %@", name);
}

- (void)adView:(GADBannerView *)bannerView willChangeAdSizeTo:(GADAdSize)size {
    NSLog(@"NativoSDK: GAM Will change ad size: %@", NSStringFromCGSize(size.size));
}

@end
