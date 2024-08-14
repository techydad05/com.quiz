const questions = [
    {
        question: "What is the supreme law of the land?",
        options: [
            "The Constitution",
            "The Declaration of Independence",
            "The Articles of Confederation",
            "The Bill of Rights"
        ],
        correctIndex: 0
    },
    {
        question: "What does the Constitution do?",
        options: [
            "Sets up the government",
            "Defines the government",
            "Protects basic rights of Americans",
            "All of the above"
        ],
        correctIndex: 3
    },
    {
        question:
            "The idea of self-government is in the first three words of the Constitution. What are these words?",
        options: [
            "We the People",
            "We the Citizens",
            "We the Government",
            "We the Americans"
        ],
        correctIndex: 0
    },
    {
        question: "What is an amendment?",
        options: [
            "A change to the Constitution",
            "A preamble to the Constitution",
            "A law passed by Congress",
            "A declaration of independence"
        ],
        correctIndex: 0
    },
    {
        question: "What do we call the first ten amendments to the Constitution?",
        options: [
            "The Bill of Rights",
            "The Articles of Confederation",
            "The Declaration of Independence",
            "The Federalist Papers"
        ],
        correctIndex: 0
    },
    {
        question: "What is one right or freedom from the First Amendment?",
        options: ["Speech", "Right to bear arms", "Vote", "Travel"],
        correctIndex: 0
    },
    {
        question: "How many amendments does the Constitution have?",
        options: ["27", "13", "10", "7"],
        correctIndex: 0
    },
    {
        question: "What did the Declaration of Independence do?",
        options: [
            "Announced our independence",
            "Declared our independence",
            "Said that the United States is free",
            "All of the above"
        ],
        correctIndex: 3
    },
    {
        question: "What are two rights in the Declaration of Independence?",
        options: [
            "Life and liberty",
            "Life and the pursuit of happiness",
            "Liberty and property",
            "Life and property"
        ],
        correctIndex: 1
    },
    {
        question: "What is freedom of religion?",
        options: [
            "You can practice any religion, or not practice a religion",
            "You must practice a religion",
            "You cannot practice a religion",
            "The government chooses your religion"
        ],
        correctIndex: 0
    },
    {
        question: "What is the economic system in the United States?",
        options: [
            "Capitalist economy",
            "Communist economy",
            "Mixed economy",
            "Socialist economy"
        ],
        correctIndex: 0
    },
    {
        question: 'What is the "rule of law"?',
        options: [
            "Everyone must follow the law",
            "Leaders must obey the law",
            "Government must obey the law",
            "All of the above"
        ],
        correctIndex: 3
    },
    {
        question: "Name one branch or part of the government.",
        options: ["Congress", "Army", "President", "Supreme Court"],
        correctIndex: 0
    },
    {
        question:
            "What stops one branch of government from becoming too powerful?",
        options: [
            "Checks and balances",
            "Separation of powers",
            "Federalism",
            "Both a and b"
        ],
        correctIndex: 3
    },
    {
        question: "Who is in charge of the executive branch?",
        options: [
            "The President",
            "The Speaker of the House",
            "The Chief Justice",
            "The Vice President"
        ],
        correctIndex: 0
    },
    {
        question: "Who makes federal laws?",
        options: ["Congress", "The President", "The Supreme Court", "The states"],
        correctIndex: 0
    },
    {
        question: "What are the two parts of the U.S. Congress?",
        options: [
            "The Senate and House of Representatives",
            "The Senate and the Cabinet",
            "The House of Representatives and the Supreme Court",
            "The Supreme Court and the Cabinet"
        ],
        correctIndex: 0
    },
    {
        question: "How many U.S. Senators are there?",
        options: ["100", "50", "435", "200"],
        correctIndex: 0
    },
    {
        question: "We elect a U.S. Senator for how many years?",
        options: ["6", "4", "2", "8"],
        correctIndex: 0
    },
    {
        question: "Who does a U.S. Senator represent?",
        options: [
            "All people of the state",
            "The state legislature",
            "The Governor",
            "The President"
        ],
        correctIndex: 0
    },
    {
        question:
            "Why do some states have more Representatives than other states?",
        options: [
            `'Because of the state's population', 'Because the state's geographic size', 'Because the state's economic output', 'Because of the state's location'`
        ],
        correctIndex: 0
    },
    {
        question: "We elect a President for how many years?",
        options: ["4", "2", "6", "8"],
        correctIndex: 0
    },
    {
        question: "In what month do we vote for President?",
        options: ["November", "January", "October", "December"],
        correctIndex: 0
    },
    {
        question: "What is the name of the President of the United States now?",
        options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
        correctIndex: 0
    },
    {
        question:
            "What is the name of the Vice President of the United States now?",
        options: ["Kamala Harris", "Mike Pence", "Nancy Pelosi", "Chuck Schumer"],
        correctIndex: 0
    },
    {
        question: "If the President can no longer serve, who becomes President?",
        options: [
            "The Vice President",
            "The Speaker of the House",
            "The Chief Justice",
            "The Secretary of State"
        ],
        correctIndex: 0
    },
    {
        question: "Who is the Commander in Chief of the military?",
        options: [
            "The President",
            "The Vice President",
            "The Secretary of Defense",
            "The Attorney General"
        ],
        correctIndex: 0
    },
    {
        question: "Who signs bills to become laws?",
        options: [
            "The President",
            "The Vice President",
            "The Speaker of the House",
            "The Chief Justice"
        ],
        correctIndex: 0
    },
    {
        question: "Who vetoes bills?",
        options: [
            "The President",
            "The Vice President",
            "The Speaker of the House",
            "The Chief Justice"
        ],
        correctIndex: 0
    },
    {
        question: `What does the President's Cabinet do?`,
        options: [
            "Advises the President",
            "Makes laws",
            "Commands the military",
            "Controls the Treasury"
        ],
        correctIndex: 0
    },
    {
        question: "What are two Cabinet-level positions?",
        options: [
            "Secretary of State and Secretary of Labor",
            "Secretary of the Interior and Secretary of History",
            "Attorney General and Secretary of Economics",
            "Secretary of Agriculture and Secretary of Energy"
        ],
        correctIndex: 0
    },
    {
        question: "What does the judicial branch do?",
        options: [
            "Reviews laws",
            "Resolves disputes",
            "Decides if a law goes against the Constitution",
            "All of the above"
        ],
        correctIndex: 3
    },
    {
        question: "What is the highest court in the United States?",
        options: [
            "The Supreme Court",
            "The Federal Court",
            "The District Court",
            "The Appellate Court"
        ],
        correctIndex: 0
    },
    {
        question: "How many justices are on the Supreme Court?",
        options: ["9", "7", "11", "13"],
        correctIndex: 0
    },
    {
        question: "Who is the Chief Justice of the United States now?",
        options: [
            "John Roberts",
            "Clarence Thomas",
            "Ruth Bader Ginsburg",
            "Stephen Breyer"
        ],
        correctIndex: 0
    },
    {
        question:
            "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        options: [
            "To print money",
            "To create an army",
            "To make treaties",
            "All of the above"
        ],
        correctIndex: 3
    },
    {
        question:
            "Under our Constitution, some powers belong to the states. What is one power of the states?",
        options: [
            "Provide schooling and education",
            "Print money",
            "Make treaties",
            "Create an army"
        ],
        correctIndex: 0
    },
    {
        question: "What is the capital of the United States?",
        options: ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
        correctIndex: 0
    },
    {
        question: "Which of these is NOT a U.S. state capital?",
        options: ["Albany", "Sacramento", "Miami", "Austin"],
        correctIndex: 2
    },
    {
        question: 'Which state is known as the "Sunshine State"?',
        options: ["Florida", "California", "Hawaii", "Arizona"],
        correctIndex: 0
    },
    {
        question: "Which state is the largest by land area?",
        options: ["Alaska", "Texas", "California", "Montana"],
        correctIndex: 0
    },
    {
        question: "Which state is known for its production of maple syrup?",
        options: ["Vermont", "Maine", "New Hampshire", "All of the above"],
        correctIndex: 3
    },
    {
        question:
            "What are the two major political parties in the United States?",
        options: [
            "Democratic and Republican",
            "Liberal and Conservative",
            "Independent and Green",
            "Libertarian and Socialist"
        ],
        correctIndex: 0
    },
    {
        question: "What is the political party of the President now?",
        options: [
            "Democratic Party",
            "Republican Party",
            "Independent",
            "Green Party"
        ],
        correctIndex: 0
    }
];

export default questions;

