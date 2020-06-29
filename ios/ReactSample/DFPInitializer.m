//
//  DFPInitializer.m
//  ReactSample
//
//  Created by Matt Murray on 4/21/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "DFPInitializer.h"

@import NativoSDK;
@import GoogleMobileAds;
static NSString * const PublicationDomain = @"http://www.nativo.net/mobiledfptest";

@interface DFPInitializer () <GADBannerViewDelegate, GADAdSizeDelegate, GADAppEventDelegate>
@property (nonatomic) UIViewController *rootVC;
@property (nonatomic) DFPBannerView *dfpBanner;
@end

@implementation DFPInitializer

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadBanner)
{
  // Load data into DFPBannerView & start request
  NSLog(@"NativoSDK::DFP Loading DFP");
  [self requestBanner];
  
}

- (void)requestBanner {
  dispatch_async(dispatch_get_main_queue(), ^{
    self.rootVC = [[UIViewController alloc] init];
    self.dfpBanner = [[DFPBannerView alloc] initWithAdSize:GADAdSizeFromCGSize(CGSizeMake(3, 3))];
    [self.rootVC.view addSubview:self.dfpBanner];
    self.dfpBanner.adUnitID = @"/416881364/AdUnitSDK";
    self.dfpBanner.validAdSizes = @[NSValueFromGADAdSize(GADAdSizeFromCGSize(kGADAdSizeNativoDefault)),      // Nativo ad size
                                     NSValueFromGADAdSize(kGADAdSizeBanner)];  // Banner ad size
    self.dfpBanner.rootViewController = self.rootVC;
    self.dfpBanner.delegate = self;
    self.dfpBanner.adSizeDelegate = self;
    self.dfpBanner.appEventDelegate = self;

    // Set custom targeting for Nativo on DFP request (Get from representative at Nativo)
    DFPRequest *request = [DFPRequest request];
    request.customTargeting = @{ @"ntvPlacement" : @"991150" };
    
    [self.dfpBanner loadRequest:request];
  });
}

#pragma mark - GAD BannerViewDelegate

- (void)adViewDidReceiveAd:(GADBannerView *)bannerView {
    
    // Check size to determine what type of ad was returned
    if (GADAdSizeEqualToSize(bannerView.adSize, GADAdSizeFromCGSize(kGADAdSizeNativoDefault))) {
        
        NSLog(@"NativoSDK::DFP Did recieve DFP Nativo ad");
        bannerView.hidden = YES;
        
        // Since 3x3 is the size of our Nativo ads, we pass this bannerView to Nativo where they will return the appropriate ad
        [NativoSDK makeDFPRequestWithBannerView:bannerView forSection:PublicationDomain atLocationIdentifier:@(10)];
        
    } else {
        NSLog(@"NativoSDK::DFP Did recieve DFP banner ad");
        bannerView.hidden = NO;
    }
}

/// Tells the delegate that an ad request failed. The failure is normally due to network
- (void)adView:(GADBannerView *)bannerView didFailToReceiveAdWithError:(GADRequestError *)error {
    NSLog(@"NativoSDK::DFP Error - %@", error);
}

- (void)adView:(GADBannerView *)banner
didReceiveAppEvent:(NSString *)name
      withInfo:(NSString *GAD_NULLABLE_TYPE)info {
    NSLog(@"NativoSDK::DFP Banner Event: %@", name);
}

- (void)adView:(GADBannerView *)bannerView willChangeAdSizeTo:(GADAdSize)size {
    NSLog(@"NativoSDK::DFP Will change ad size: %@", NSStringFromCGSize(size.size));
}

@end
