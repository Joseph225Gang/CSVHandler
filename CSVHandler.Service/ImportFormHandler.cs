﻿using CSVHandler.Domain.Package;
using CSVHandler.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Service
{
    public class ImportFormHandler : IFormHandler
    {
        private FileHandler fileHandler = new FileHandler();
        public StringBuilder GenerateData(dynamic target)
        {
            StringBuilder data = new StringBuilder();
            foreach (var item in target)
            {
                data = fileHandler.AddContent(data, (string)item.buildDate);
                data = fileHandler.AddContent(data, (string)item.amount);
                data = fileHandler.AddContent(data, (string)item.importCode);
                data = fileHandler.AddContent(data, (string)item.importNumber);
                data = fileHandler.AddContent(data, (string)item.formCode);
                data.Append("\n");
            }
            return data;
        }

        public void GenerateFlow(dynamic target)
        {
            string fileName = (string)target.importFormFileName;
            var data = GenerateData(target.importFormList);
            fileHandler.WriteCSVFile(fileName + PackageSettings.CSVFileExtension, data.ToString());
        }
    }
}