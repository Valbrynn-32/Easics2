using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Easics2.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
                return View();
        }

        
        [ChildActionOnly]
        public PartialViewResult sidebar()
        {
            string[] result1 = { "Gravitation", "Circular motion", "Angular velocity", "Momentum", "Forces", "Electricity", "Magnetism", "Energy", "Heatcapacity" };
            return PartialView("_sidebar", result1);
        }
        
        
        public PartialViewResult forces()
        {
            string[] forcesArray = { "Force", "Spring force", "(Friction)", "2nd law" };
            return PartialView("forces", forcesArray);
        }

        public PartialViewResult electricity()
        {
            string[] electricityArray = { "Voltage", "Current", "Resistance Series", "Resistance Parallel", "Power" };
            return PartialView("_electricity", electricityArray);
        }

        public PartialViewResult gravitation()
        {
            string[] gravitationArray = { "Grav" };
            return PartialView("_gravitation", gravitationArray);
        }

        public PartialViewResult circularMotion()
        {
            return PartialView("_circularMotion");
        }

        public PartialViewResult angularVelocity()
        {
            string[] avArray = { "AngularVelocity" };
            return PartialView("_angularVelocity", avArray);
        }

        public PartialViewResult momentum()
        {
            string[] momentumArray = { "Inertia" };
            return PartialView("_momentum", momentumArray);
        }

        public PartialViewResult magnetism()
        {
            string[] magnetismArray = { "BIL" };
            return PartialView("_magnetism", magnetismArray);
        }

        public PartialViewResult energy()
        {
            string[] energyArray = { "PotEnergy", "KinEnergy" };
            return PartialView("_energy", energyArray);
        }

        public PartialViewResult heatcapacity()
        {
            string[] heatcapacityArray = { "Specific heat capacity", "Heat capacity" };
            return PartialView("_heatcapacity", heatcapacityArray);
        }

        public PartialViewResult force()
        {
            return PartialView("_force");
        }

        public PartialViewResult voltage()
        {
            return PartialView("_voltage");
        }
        
        public PartialViewResult ndlaw()
        {
            return PartialView("_ndlaw");
        }

        public PartialViewResult current()
        {
            return PartialView("_current");
        }

        public PartialViewResult power()
        {
            return PartialView("_power");
        }
    }
}