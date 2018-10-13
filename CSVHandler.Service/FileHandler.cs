using CSVHandler.Domain.Package;
using CSVHandler.Service.Interface;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Service
{
    public class FileHandler
    {
        public void GenerateCSVFile(IFormHandler formHandler, dynamic target)
        {
            formHandler.GenerateFlow(target);
        }

        public StringBuilder AddContent(StringBuilder data, string content)
        {
            string comma = ",";
            data.Append(content);
            data.Append(comma);
            return data;
        }

        public void WriteCSVFile(string fileName, string data)
        {
            using (StreamWriter file = File.CreateText(PackageSettings.DDisk + fileName))
            {
                file.Flush();
                file.Write(data);
            }
        }
    }
}
