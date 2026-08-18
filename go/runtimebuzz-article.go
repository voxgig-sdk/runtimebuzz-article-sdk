package voxgigruntimebuzzarticlesdk

import (
	"github.com/voxgig-sdk/runtimebuzz-article-sdk/go/core"
	"github.com/voxgig-sdk/runtimebuzz-article-sdk/go/entity"
	"github.com/voxgig-sdk/runtimebuzz-article-sdk/go/feature"
	_ "github.com/voxgig-sdk/runtimebuzz-article-sdk/go/utility"
)

// Type aliases preserve external API.
type RuntimebuzzArticleSDK = core.RuntimebuzzArticleSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RuntimebuzzArticleEntity = core.RuntimebuzzArticleEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RuntimebuzzArticleError = core.RuntimebuzzArticleError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewReadFinderIndexEntityFunc = func(client *core.RuntimebuzzArticleSDK, entopts map[string]any) core.RuntimebuzzArticleEntity {
		return entity.NewReadFinderIndexEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.RuntimebuzzArticleSDK, entopts map[string]any) core.RuntimebuzzArticleEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRuntimebuzzArticleSDK = core.NewRuntimebuzzArticleSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRuntimebuzzArticleSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RuntimebuzzArticleSDK  { return NewRuntimebuzzArticleSDK(nil) }
func Test() *RuntimebuzzArticleSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
