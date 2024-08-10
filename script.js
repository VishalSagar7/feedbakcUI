const smilydivs = document.querySelectorAll('.smily-div');
const btn = document.querySelector('.btn'); // Select the first element with class 'btn'
const body = document.querySelector('body');
const box = document.querySelector('.box')



let feedback = '';

smilydivs.forEach((smily) => {
    smily.addEventListener('click', () => {
        smily.style.backgroundColor = 'rgb(83, 178, 83)';
        smily.style.color = 'white';
        // console.log(smily.innerText);
        feedback = smily.innerText
    });
});

if (btn) { // Check if the button exists
    btn.addEventListener('click', () => {
        box.style.display = 'none';

        if (feedback === "Uphappy") {
            const unhappyDiv = document.createElement('div');
            unhappyDiv.style.display = 'flex'
            unhappyDiv.style.flexDirection = 'column'
            unhappyDiv.style.justifyContent = 'space-between';
            unhappyDiv.style.alignItems = 'center'
            unhappyDiv.style.padding = '20px'
            unhappyDiv.style.height = '150px'
            unhappyDiv.style.width = '400px'
            // unhappyDiv.style.border = '1px solid black'
            unhappyDiv.style.borderRadius = '5px';
            unhappyDiv.style.textAlign = 'center';
            unhappyDiv.style.boxShadow = '2px 2px 5px gray'
            unhappyDiv.style.color = 'rgb(1, 103, 1)'

            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            h2.innerText = "Thank You!"
            h3.innerText = "Feedback: Unhappy"
            p.innerText = "We'll use your feedback to improve our customer support."

            unhappyDiv.appendChild(h2);
            unhappyDiv.appendChild(h3);
            unhappyDiv.appendChild(p);

            body.appendChild(unhappyDiv);
        }

        else if (feedback === "Neutral") {

            const unhappyDiv = document.createElement('div');
            unhappyDiv.style.display = 'flex'
            unhappyDiv.style.flexDirection = 'column'
            unhappyDiv.style.justifyContent = 'space-between';
            unhappyDiv.style.alignItems = 'center'
            unhappyDiv.style.padding = '20px'
            unhappyDiv.style.height = '150px'
            unhappyDiv.style.width = '400px'
            // unhappyDiv.style.border = '1px solid black'
            unhappyDiv.style.borderRadius = '5px';
            unhappyDiv.style.textAlign = 'center';
            unhappyDiv.style.boxShadow = '2px 2px 5px gray'
            unhappyDiv.style.color = 'rgb(1, 103, 1)'

            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            h2.innerText = "Thank You!"
            h3.innerText = "Feedback: Neutral"
            p.innerText = "We'll use your feedback to improve our customer support."

            unhappyDiv.appendChild(h2);
            unhappyDiv.appendChild(h3);
            unhappyDiv.appendChild(p);

            body.appendChild(unhappyDiv);
        }

        else if (feedback === "Satisfied") {
            const unhappyDiv = document.createElement('div');
            unhappyDiv.style.display = 'flex'
            unhappyDiv.style.flexDirection = 'column'
            unhappyDiv.style.justifyContent = 'space-between';
            unhappyDiv.style.alignItems = 'center'
            unhappyDiv.style.padding = '20px'
            unhappyDiv.style.height = '150px'
            unhappyDiv.style.width = '400px'
            // unhappyDiv.style.border = '1px solid black'
            unhappyDiv.style.borderRadius = '5px';
            unhappyDiv.style.textAlign = 'center';
            unhappyDiv.style.boxShadow = '2px 2px 5px gray'
            unhappyDiv.style.color = 'rgb(1, 103, 1)'

            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            h2.innerText = "Thank You!"
            h3.innerText = "Feedback: Happy"
            p.innerText = "We'll use your feedback to improve our customer support."

            unhappyDiv.appendChild(h2);
            unhappyDiv.appendChild(h3);
            unhappyDiv.appendChild(p);

            body.appendChild(unhappyDiv);
        }
    });
} else {
    console.error('Button not found');
}






