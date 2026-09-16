package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewReadFinderIndexEntityFunc func(client *RuntimebuzzArticleSDK, entopts map[string]any) RuntimebuzzArticleEntity

var NewSearchEntityFunc func(client *RuntimebuzzArticleSDK, entopts map[string]any) RuntimebuzzArticleEntity

