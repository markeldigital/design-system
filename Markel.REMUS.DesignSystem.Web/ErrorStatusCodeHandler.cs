using System.Collections.Generic;
using System.Linq;
using Nancy;
using Nancy.ErrorHandling;
using Nancy.ViewEngines;

namespace Markel.REMUS.BrokerPortal.Web
{
    public class ErrorStatusCodeHandler : IStatusCodeHandler
    {
        private readonly IViewRenderer _viewRenderer;

        private static readonly IEnumerable<HttpStatusCode> SupportedStatusCodes =
            new List<HttpStatusCode>
            {
                HttpStatusCode.NotFound,
                HttpStatusCode.Forbidden,
                HttpStatusCode.InternalServerError
            };
        

        public ErrorStatusCodeHandler(IViewRenderer viewRenderer)
        {
            _viewRenderer = viewRenderer;
        }

        public bool HandlesStatusCode(HttpStatusCode statusCode, NancyContext context)
        {
            return SupportedStatusCodes.Contains(statusCode);
        }

        public void Handle(HttpStatusCode statusCode, NancyContext context)
        {
            var response = _viewRenderer.RenderView(context, "Global/Error");
            response.StatusCode = statusCode;
            context.Response = response;
        }
    }
}
