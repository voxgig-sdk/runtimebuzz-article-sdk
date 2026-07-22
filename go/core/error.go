package core

type RuntimebuzzArticleError struct {
	IsRuntimebuzzArticleError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRuntimebuzzArticleError(code string, msg string, ctx *Context) *RuntimebuzzArticleError {
	return &RuntimebuzzArticleError{
		IsRuntimebuzzArticleError: true,
		Sdk:              "RuntimebuzzArticle",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RuntimebuzzArticleError) Error() string {
	return e.Msg
}
