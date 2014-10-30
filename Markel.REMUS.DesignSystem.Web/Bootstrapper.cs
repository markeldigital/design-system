using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using Autofac;
using Markel.REMUS.Infrastructure.Nancy;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Bootstrappers.Autofac;
using Nancy.Conventions;

namespace Markel.REMUS.DesignSystem.Web
{
    public class Bootstrapper : AutofacNancyBootstrapper
    {
        protected override void ApplicationStartup(ILifetimeScope container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);
            StaticConfiguration.DisableErrorTraces = false;
        }

#if DEBUG
        protected override IRootPathProvider RootPathProvider
        {
            get { return new DebugRootPathProvider(); }
        }
#endif

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);

            conventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("bower_components", "bower_components")
            );

            conventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("Content/non_bower", "Content/non_bower")
            );

            conventions.CultureConventions = new List<Func<NancyContext, CultureInfo>>
            {
                BuiltInCultureConventions.FormCulture,
                BuiltInCultureConventions.PathCulture,
                BuiltInCultureConventions.HeaderCulture,
                BuiltInCultureConventions.SessionCulture,
                BuiltInCultureConventions.CookieCulture,
                BuiltInCultureConventions.ThreadCulture
            };
        }

        protected override void RequestStartup(ILifetimeScope container, IPipelines pipelines, NancyContext context)
        {
            base.RequestStartup(container, pipelines, context);
            LogPublisher.Enable(pipelines); //should be last as it needs to be at the start of pipeline
        }
    }

#if DEBUG
    public class DebugRootPathProvider : IRootPathProvider
    {
        public string GetRootPath()
        {
            string cwd = Environment.CurrentDirectory;
            string rootPath = Directory.GetParent(Directory.GetParent(cwd).FullName).FullName;
            return rootPath;
        }
    }

#endif
}