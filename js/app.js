const questions = [
    {
        'que': 'Which of the following is a markup languange',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct' : 'a'
    },

    {
        'que': 'What year was javascript launched',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'None of the above',
        'correct' : 'b'
    },

    {
        'que': 'what does CSS stands for?',
        'a' : 'Hypertext Markup Language',
        'b' : 'Cascading Style Sheet',
        'c' : 'Jason Object Notation',
        'd' : 'Helicopters Terminals',
        'correct' : 'b'
    },
    {
        'que': 'What does CPU stand for?',
        'a' : 'Central Processing Unit',
        'b' : 'Computer Processing Unit',
        'c' : 'Central Program Unit',
        'd' : 'Central Power Unit',
        'correct' : 'a'
    },
    {
        'que': 'Which programming language is often used for developing Android apps?',
        'a' : 'Java',
        'b' : 'Python',
        'c' : 'C#',
        'd' : 'Swift',
        'correct' : 'a'
    },
    {
        'que': 'What is the purpose of RAM in a computer?',
        'a' : 'Long-term storage',
        'b' : 'Temporary storage of data and program instructions for the CPU',
        'c' : 'Running the operating system',
        'd' : 'Rendering graphics',
        'correct' : 'b'
    },
    {
        'que': 'Which protocol is used for sending emails?',
        'a' : 'HTTP',
        'b' : 'FTP',
        'c' : 'SMTP',
        'd' : 'TCP',
        'correct' : 'c'
    },
    {
        'que': 'What does HTML stand for?',
        'a' : 'Hyperlinks and Text Markup Language',
        'b' : 'Hyper Text Markup Language',
        'c' : 'Hyperlinks and Text Management Language',
        'd' : 'Home Tool Markup Language',
        'correct' : 'b'
    },
    {
        'que': 'What is the main function of an operating system?',
        'a' : 'To manage hardware resources',
        'b' : 'To create documents and spreadsheets',
        'c' : 'To develop software applications',
        'd' : 'To provide internet connectivity',
        'correct' : 'a'
    },
    {
        'que': 'What does LAN stand for?',
        'a' : 'Large Area Network',
        'b' : 'Local Area Network',
        'c' : 'Long-range Access Network',
        'd' : 'Low-bandwidth Area Network',
        'correct' : 'b'
    },
    {
        'que': 'Which data structure operates on a Last-In-First-Out (LIFO) basis?',
        'a' : 'Queue',
        'b' : 'Stack',
        'c' : 'Heap',
        'd' : 'Array',
        'correct' : 'b'
    },
    {
        'que': 'What is the binary equivalent of the decimal number 10?',
        'a' : '1010',
        'b' : '1100',
        'c' : '1001',
        'd' : '1110',
        'correct' : 'a'
    },
    {
        'que': 'What does GUI stand for?',
        'a' : 'Graphical User Interface',
        'b' : 'General Utility Interface',
        'c' : 'Global User Integration',
        'd' : 'Graphical Utility Integration',
        'correct' : 'a'
    },
    {
        'que': 'What is the purpose of a compiler?',
        'a' : 'To execute code',
        'b' : 'To translate source code into machine code',
        'c' : 'To debug programs',
        'd' : 'To design user interfaces',
        'correct' : 'b'
    },
    {
        'que': 'Which of the following is a programming language?',
        'a' : 'JPEG',
        'b' : 'SQL',
        'c' : 'HTML',
        'd' : 'MP4',
        'correct' : 'b'
    },
    {
        'que': 'What does URL stand for?',
        'a' : 'Uniform Resource Locator',
        'b' : 'Universal Registration Link',
        'c' : 'Unified Resource Library',
        'd' : 'User Requested Link',
        'correct' : 'a'
    },
    {
        'que': 'What is the purpose of an IP address?',
        'a' : 'To identify a specific website',
        'b' : 'To identify a specific computer or device on a network',
        'c' : 'To store information temporarily',
        'd' : 'To encrypt data transmissions',
        'correct' : 'b'
    },
    {
        'que': 'Which of the following is NOT a type of computer memory?',
        'a' : 'ROM',
        'b' : 'RAM',
        'c' : 'CPU',
        'd' : 'Cache',
        'correct' : 'c'
    },
    {
        'que': 'What is the purpose of a firewall?',
        'a' : 'To prevent unauthorized access to or from a private network',
        'b' : 'To enhance internet speed',
        'c' : 'To encrypt data transmissions',
        'd' : 'To clean viruses from a computer',
        'correct' : 'a'
    },
    {
        'que': 'Which company developed the Python programming language?',
        'a' : 'Google',
        'b' : 'Microsoft',
        'c' : 'Apple',
        'd' : 'Dropbox',
        'correct' : 'd'
    },
    {
        'que': 'What is the purpose of an algorithm?',
        'a' : 'To convert data into a visual representation',
        'b' : 'To solve a problem or perform a task',
        'c' : 'To store data securely',
        'd' : 'To compress files',
        'correct' : 'b'
    },
    {
        'que': 'What does DNS stand for?',
        'a' : 'Dynamic Name System',
        'b' : 'Domain Name System',
        'c' : 'Data Networking Service',
        'd' : 'Digital Network Solution',
        'correct' : 'b'
    },
    {
        'que': 'What is the purpose of a modem?',
        'a' : 'To connect a computer to the internet',
        'b' : 'To display graphics on a monitor',
        'c' : 'To store files and documents',
        'd' : 'To cool down the computer hardware',
        'correct' : 'a'
    },
    {
        'que': 'Which programming language is often used for data analysis and scientific computing?',
        'a' : 'Java',
        'b' : 'C++',
        'c' : 'Python',
        'd' : 'Ruby',
        'correct' : 'c'
    },
    {
        'que': 'What is the purpose of a network router?',
        'a' : 'To connect multiple devices and route data between them',
        'b' : 'To store and manage data backups',
        'c' : 'To print documents wirelessly',
        'd' : 'To provide power to network devices',
        'correct' : 'a'
    },
    {
        'que': 'Which of the following is NOT a type of computer virus?',
        'a' : 'Trojan horse',
        'b' : 'Worm',
        'c' : 'Spyware',
        'd' : 'Firewall',
        'correct' : 'd'
    },
    {
        'que': 'What is the purpose of a VPN?',
        'a' : 'To secure and encrypt internet connections',
        'b' : 'To create virtual private networks',
        'c' : 'To speed up internet browsing',
        'd' : 'To store large amounts of data',
        'correct' : 'a'
    },
    {
        'que': 'Which of the following is an example of an input device?',
        'a' : 'Monitor',
        'b' : 'Printer',
        'c' : 'Keyboard',
        'd' : 'Speaker',
        'correct' : 'c'
    },
    {
        'que': 'What does SQL stand for?',
        'a' : 'Structured Query Language',
        'b' : 'Sequential Query Language',
        'c' : 'Systematic Query Language',
        'd' : 'Structured Qualification Language',
        'correct' : 'a'
    }


]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("queBox")
const optionsInput = document.querySelectorAll('.option')

const loadQuestion = () => {

    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAns()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;

}

const getAns = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionsInput.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `

    <h3> Thank You for playing the Quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    
    `
}

loadQuestion();

