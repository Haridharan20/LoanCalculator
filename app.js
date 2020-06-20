//UI variables
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const plans = document.getElementById('plans');
const select = document.getElementById('select');

select.style.backgroundColor='#e9ecef';

//UI Result variables
const monthlyPay = document.getElementById("monthly-payment");
const totalPay = document.getElementById("total-payment");
const totalInterest = document.getElementById("total-interest");
const clear = document.getElementById("clear");

//Add event
const form = document.getElementById("loan-form");

form.addEventListener('submit',function(e)
{
    //show Loader
    document.getElementById('loading').style.display='block';

    //Hide Result
    document.getElementById('result').style.display='none';

    setTimeout(calculateLoan,2000);
    
    e.preventDefault();
});
//Function

function calculateLoan()
{
    if(select.value == 'Monthly')
    {
        const principle = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value)/100/12;
        const calculatedPayment =parseFloat(plans.value);
        
        //monthly payment
        const x = Math.pow(1+calculatedInterest,calculatedPayment);
        const monthly = (principle*x*calculatedInterest)/(x-1);

        if(isFinite(monthly))
        {
        monthlyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayment)-principle).toFixed(2);
        //show Loader
        document.getElementById('loading').style.display='none';

        //Hide Result
        document.getElementById('result').style.display='block';
            
        // clear Event
        clear.addEventListener('click',function()
        {
            form.reset();
            //Hide Result
            document.getElementById('result').style.display='none';
        })

        }
        else
        {
            showError("Please Check The Numbers"); 
        }
    }
    else if(select.value == 'Yearly')
    {
        const principle = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value)/100/12;
        const calculatedPayment =parseFloat(plans.value)*12;
        
        //monthly payment
        const x = Math.pow(1+calculatedInterest,calculatedPayment);
        const monthly = (principle*x*calculatedInterest)/(x-1);

        if(isFinite(monthly))
        {
        monthlyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayment)-principle).toFixed(2);
        //show Loader
        document.getElementById('loading').style.display='none';

        //Hide Result
        document.getElementById('result').style.display='block';
            
        // clear Event
        clear.addEventListener('click',function()
        {
            form.reset();
            //Hide Result
            document.getElementById('result').style.display='none';
        })

        }
        else
        {
            showError("Please Check The Numbers"); 
        }
    }
    else
    {
        showError("Choose The Plan");
    }
}
//showError
function showError(error)
{
    //show Loader
    document.getElementById('loading').style.display='none';

    //Hide Result
    document.getElementById('result').style.display='none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
 
    card.insertBefore(errorDiv,heading);

    setTimeout(clearError, 3000);
}
function clearError()
{
    document.querySelector('.alert').remove();
}