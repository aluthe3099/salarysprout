class Company
{
  var companyName;
  var companyResponses;
  var companyAvgSalary;
  var totalSalary;
  var employees = {};
  constructor(companyName)
  {
    //needs to look at each transfer to the address
    this.companyName = companyName;
    processResponses();
    //all people array containing the values of every employee who responded
  }
  processResponses()
  {
    totalSalary = 0;
    companyResponses = 0;
    for //need to iterate through everything sent to that address
    {
      employees[getCompanyName()] = {position: personPosition(), salary:personSalary()};
      //if is a transaction that has the company name, then
      {
        companyResponses = companyResponses+1;
        totalSalary += //salary of that person
      }
    }//loop through all the responses to the address
    //accumulate array if the response includes the company companyName
    //add to totalSalary,
    //at the end compute avg salary based on the number of responses
    companyAvgSalary = totalSalary/companyResponses;
  }
  getCompanyName()
  {
    return companyName;
  }
  getCompanyResponses()
  {
    return companyResponses;
  }
  getCompanyAvgSalary()
  {
    return companyAvgSalary;
  }
}
<script src="https://unpkg.com/xlsx/dist/xlsx.full.min.js"></script>
