using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventTracking.Controllers
{
    public class EventTrackerController : Controller
    {
        //
        // GET: /EventTracker/
       
      [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

    }
}
