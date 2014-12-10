using Nancy;

namespace Markel.REMUS.DigitalBrandSystem.Modules
{
    public class RootModule : NancyModule
    {
        public RootModule()
        {
            Get["/"] = _ => View["Default/index"];

            Get["/{value}"] = _ =>
            {
                string[] querystring = ((string) _.value).Split(',');

                string url = querystring[0];

                string[] pagename = url.Split('.');

                if (pagename.Length > 1)
                {
                    url = pagename[0] + ".cshtml";
                }

                return Response.AsRedirect("Snippets/" + url);
            };

            Get["/Snippets/{value}"] = _ =>
            {
                string[] querystring = ((string) _.value).Split(',');

                string url = querystring[0];

                string[] pagename = url.Split('.');

                if (pagename.Length > 1)
                {
                    url = pagename[0] + ".cshtml";
                }

                return View["Snippets/" + url];
            };
        }
    }
}