﻿using System;
using System.Web.Http;

namespace PV247_angular
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private const string ROOT_DOCUMENT = "/index.html";

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            string url = Request.Url.LocalPath;
            if (!System.IO.File.Exists(Context.Server.MapPath(url)) && !url.StartsWith("/api/"))
            {
                Context.RewritePath(ROOT_DOCUMENT);
            }
        }

        protected void Application_Start()
        {
            GlobalConfiguration.Configure(config =>
            {
                config.MapHttpAttributeRoutes();

                config.Routes.MapHttpRoute(
                    name: "DefaultApi",
                    routeTemplate: "api/{controller}/{action}/{id}",
                    defaults: new { id = RouteParameter.Optional }
                );
            });
        }
    }
}
