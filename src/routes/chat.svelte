<svelte:head>
    <title>AnonChat - Connect and Chat Anonymously</title>
    <script src="https://kit.fontawesome.com/db3c0028dc.js" crossorigin="anonymous"></script>
</svelte:head>

<script>
let textInput;

const sendMessage = () => {
    const message = textInput.value;

    if (message === "") return;

    //send message
}


</script>

<body>
    <header>
        <div class="left-header">
            <!--Picture-->
            <h1>AnonChat</h1>
        </div>
        <div class="right-header">
            <button class="btns">Buy Me A Coffee</button>
            <button class="btns">Leave Room</button>
        </div>
    </header>



    <div class="screen-container">
        <div class="left-bar">
            <div class="room-info">
                <h1><i class="fa-solid fa-house-chimney"></i> Room Name</h1>
                <div class="room-name-container">
                    <h3>JavaScript</h3>
                    <button id='copyBTN'><i class="fa-regular fa-copy"></i><div class="tooltip">Copy</div>
                    </button>
                </div>
            </div>
            <div class="users-info">
                <h1><i class="fa-solid fa-users"></i> Users</h1>
                <div class="users-container">
                    <h3>User 1</h3>
                    <h3>User 2</h3>
                    <h3>User 3</h3>
                </div>
            </div>
        </div>

        <div id="screen-container">
            <div class="screen">
                <div class="message">
                    <div class="userInfo">
                        <h5>USer 1</h5>
                        <h5>03:16</h5>
                    </div>
                    <h3>My message</h3>
                </div>

                <div class="message receivedMessage">
                    <div class="userInfo">
                        <h5>User 2</h5>
                        <h5>03:16</h5>
                    </div>
                    <h3>My message</h3>
                </div>
            </div>
            <div class="input-container">
                <input type="text" placeholder="Type your message here..." bind:this={textInput}>
                <button id='send' on:click={sendMessage}><i class="fa-sharp fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    </div>
</body>

<style>

    :root {
        --green: #00FF00;
        --white: #FFFFFF;
        --grey: #3C3C3B;
    }
    h1 {
        margin: 0;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--grey);
    }

    header {
        background-color: #2c2c2b;
        min-height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
    }

    header h1 {
       color: #00FF00;
       font-size: 3rem;
    }

    .btns {
        width: 12rem;
        height: 3rem;
        border: 4px solid var(--green);
        border-radius: 16px;
        font-size: 18px;
        color:#3C3C3B;
        cursor: pointer;
        transition: ease-in 400ms;
        margin: 0 0.5rem;
    }

    .btns:hover {
        transition: ease-in 400ms;
        scale: 1.1;
    }

    .left-bar {
        background-color: #1a1a18;
        height: calc(100vh - 20vh);
        width: 20vw;
        padding-top: 3rem;
        padding-left: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .room-info h1 {
        color: var(--white);
    }

    .room-name-container {
        background-color: var(--grey);
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.5rem;
        border-radius: 8px;
        height: 40%;
        margin-top: 0.5rem;
        color: var(--green);
        position: relative;
    }

    #copyBTN {
        cursor: pointer;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        background-color: #2c2c2b;;
        height: 100%;
        border: none;
        color: var(--white);
        transition: ease-in 400ms;
    }

    #copyBTN:hover {
        transition: ease-in 400ms;
        color: var(--green);
    }

    .users-info {
        margin-top: 2rem;
        color: var(--white);
    }

    .users-container {
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        background-color: var(--grey);
        width: 90%;
        border-radius: 8px;
        overflow-y: auto;
    }

    .users-container h3 {
        margin: 0.2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        
    }

    #screen-container {
        width: 88.8%;
    }

    .screen-container {
        display: grid;
        grid-template-columns: 22% 85%;
    }

    .screen {
       height: 87%;
       padding: 0 0.5rem;
       padding-top: 0.5rem;
       overflow-y: auto;
    }

    .input-container {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }

    .input-container input {
        width: 80%;
        height: 2rem;
        padding: 0.5rem;
        background-color: #3C3C3B;
        border: 2px solid #00FF00;
        border-radius: 8px;
        outline: none;
        font-size: 24px;
        color: var(--white);
    }

    .input-container input::placeholder {
        color: white;
    }

    #send {
        padding: 0.5rem;
        background-color: var(--white);
        border: 4px solid var(--green);
        cursor: pointer;
        color: var(--grey);
        margin-left: 0.5rem;
        font-size: 18px;
        width: 6rem;
        height: 3rem;
        transition: ease-in 400ms;
        scale: 1;
        border-radius: 8px;
    }

    #send:hover {
        transition: ease-in 400ms;
        scale: 1.1;
    }

.tooltip {
    position: absolute;
    top: 100%;
    left: 95%;
    transform: translateX(-50%);
    padding: 10px;
    background-color: #333;
    color: #fff;
    font-size: 14px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease;
}

#copyBTN:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.message {
    padding: 0.5rem;
    background-color: rgb(95, 84, 84);
    border-radius: 8px;
    color: var(--white);
    margin: 1rem;
}

.userInfo {
    display: flex;
    gap: 0.5rem;
    color: var(--green);
}

h3, h5 {
    margin: 0;
}

.receivedMessage {
    background-color: rgb(128, 119, 119);;
}
</style>