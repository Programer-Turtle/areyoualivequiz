let scorealive = 0;
let scoredead = 0;

function addalive()
{
    scorealive += 1;
}

function adddead()
{
    scoredead += 1;
}

function detremine_winner()
{
    if (scorealive > scoredead)
    {
        document.getElementById("answer").innerHTML = "Alive";
    }

    else
    {
        document.getElementById("answer").innerHTML = "Dead";
    }
    window.scrollTo(0, document.body.scrollHeight);
}

function submit_answer()
{
    const q1 = document.getElementById("q1");
    if(q1.checked)
    {
        addalive();
    }

    const q2 = document.getElementById("q2");
    if(q2.checked)
    {
        addalive();
    }

    const q3 = document.getElementById("q3");
    if(q3.checked)
    {
        addalive();
    }

    const q4 = document.getElementById("q4");
    if(q4.checked)
    {
        adddead();
    }

    const q5 = document.getElementById("q5");
    if(q5.checked)
    {
        adddead();
    }

    const q6 = document.getElementById("q6");
    if(q6.checked)
    {
        adddead();
    }

    const q7 = document.getElementById("q7");
    if(q7.checked)
    {
        adddead();
    }

    const q8 = document.getElementById("q8");
    if(q8.checked)
    {
        adddead();
    }

    const q9 = document.getElementById("q9");
    if(q9.checked)
    {
        adddead();
    }

    const q10 = document.getElementById("q10");
    if(q10.checked)
    {
        adddead();
    }

    detremine_winner();
}