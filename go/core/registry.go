package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewReadFinderIndexEntityFunc func(client *RuntimebuzzArticleSDK, entopts map[string]any) RuntimebuzzArticleEntity

var NewSearchEntityFunc func(client *RuntimebuzzArticleSDK, entopts map[string]any) RuntimebuzzArticleEntity

