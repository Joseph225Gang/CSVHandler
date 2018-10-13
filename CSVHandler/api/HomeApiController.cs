using CSVHandler.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CSVHandler.api
{
    public class HomeApiController : ApiController
    {
        public void CreateCSV(dynamic target)
        {
            FileHandler fileHandler = new FileHandler();
            fileHandler.GenerateCSVFile(new BudgetFormHandler(), target);
            fileHandler.GenerateCSVFile(new ExportFormHandler(), target);
            fileHandler.GenerateCSVFile(new ImportFormHandler(), target);
        }
    }
}
