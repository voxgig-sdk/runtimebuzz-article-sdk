-- RuntimebuzzArticle SDK error

local RuntimebuzzArticleError = {}
RuntimebuzzArticleError.__index = RuntimebuzzArticleError


function RuntimebuzzArticleError.new(code, msg, ctx)
  local self = setmetatable({}, RuntimebuzzArticleError)
  self.is_sdk_error = true
  self.sdk = "RuntimebuzzArticle"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RuntimebuzzArticleError:error()
  return self.msg
end


function RuntimebuzzArticleError:__tostring()
  return self.msg
end


return RuntimebuzzArticleError
