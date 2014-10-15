using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;
using PV247_angular.Models;

namespace PV247_angular.Controllers
{
    public class PointController : ApiController
    {
        static readonly Random mRandom = new Random();
        private const double RADIUS = 0.05653452;

        [ActionName("Get")]
        public HttpResponseMessage GetPoints()
        {
            var points = new List<Point>();

            for (int i = 0; i < GetConfigValue("NumberOfPoints"); i++)
            {
                double angle = 2.0*Math.PI*mRandom.NextDouble();
                double radius = mRandom.NextDouble();
                var point = new Point
                {
                    Latitude = 49.1940417 + RADIUS*radius*Math.Cos(angle),
                    Longitude = 16.6084205 + RADIUS * radius * Math.Sin(angle)
                };

                points.Add(point);
            }

            return Request.CreateResponse(HttpStatusCode.OK, points);
        }


        [ActionName("GetNumberOfPoints")]
        public HttpResponseMessage GetNumberOfPoints()
        {
            return Request.CreateResponse(HttpStatusCode.OK, GetConfigValue("NumberOfPoints"));
        }

        [HttpPut]
        [ActionName("SetNumberOfPoints")]
        public void SetNumberOfPoints([FromBody] int? number)
        {
            var configuration = WebConfigurationManager.OpenWebConfiguration("~");

            configuration.AppSettings.Settings["NumberOfPoints"].Value = number.ToString();
            
            configuration.Save();
        }


        private int GetConfigValue(string settingKey)
        {
            int result = 0;
            int.TryParse(ConfigurationManager.AppSettings[settingKey], out result);

            return result;
        }
    }
}
