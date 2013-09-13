class StringCalculator
{
   public Add(numbers: string): number
   {
       if (numbers == "")
           return 0;

       if (parseInt(numbers) < 0)
           throw new Error("Negative numbers not allowed (-1)");

       if(numbers.indexOf("\n"))
           numbers = numbers.replace(/\n/g, ",");

       if (numbers.indexOf(",") !== -1)
           return numbers.split(",")
               .map(a => parseInt(a))
               .filter( a => a < 1000) 
               .reduce((a, b) => a + b);
               

       return parseInt(numbers);    
   }
}


