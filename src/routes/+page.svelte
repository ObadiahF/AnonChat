<svelte:head>
    <title>AnonChat - Connect and Chat Anonymously</title>
</svelte:head>

<script>
    let inputValue = '';
    let placeholderName = 'Display Name';
    let placeholderCode = "Room Name";
    let placeholderPassword = "Room Password (Optional)"
    let modalEl;
    let joinModal;
    let body;
    let createModal;
    

    function handleInput(event) {
        inputValue = event.target.value;
    }

    function handleBlur(input) {
        switch (input) {
            case "name": 
                if (!inputValue) {
                    placeholderName = 'Display Name';
                }
            break;

            case "code":
                if (!inputValue) {
                    placeholderCode = 'Room Name';
                }
            break;

            case "password":
                if (!inputValue) {
                    placeholderPassword = "Room Password (Optional)"
                }
            break;
        }
        
  }

  const modal = (mode) => {
    if (modalEl.style.display === "none") {
        modalEl.style.display = "block";
        if (mode === 'join') {
            joinModal.style.display = 'flex';
        } else {
            createModal.style.display = 'flex';
        }
    } else {
        modalEl.style.display = "none"
        joinModal.style = 'none'
        createModal.style.display = 'none';
    }
}

const handleClick = (event) => {
    if (event.target !== createModal && !createModal.contains(event.target) && event.target !== joinModal && !joinModal.contains(event.target)) {
        if (modalEl.style.display === "block") modal();
    }

}
</script>

<body bind:this={body} on:mousedown={handleClick}>
    <section class="container">
        <div class="headings-container">
            <h1>AnonChat</h1>
            <h3>Chat Anonymously</h3>
        </div>

        <div class="input-container">
            <input type="text" maxlength="25" placeholder={placeholderName} on:input={handleInput} on:blur={() => handleBlur("name")} on:click={() => placeholderName = ""}>
        </div>

        <div class="btn-container">
            <button class="btns">Join Global Chat</button>
            <button class="btns" on:click={() => modal('create')}>Create room</button>
            <button class="btns" on:click={() => modal('join')}>Join Room</button>
        </div>

        <div class="overlay" bind:this={modalEl}>
            
            <div class="modal-container" bind:this={joinModal}>
                <h1>Join Room</h1>
                <input type="text" maxlength="20" placeholder={placeholderCode} on:input={handleInput} on:blur={() => handleBlur("code")} on:click={() => placeholderCode = ""}>
                <button class="btns">Join Room</button>
                <button class="btns" on:click={modal}>Back</button>
            </div>
            <div class="modal-container" bind:this={createModal}>
                <h1>Create Room</h1>
                <input type="text" maxlength="20" placeholder={placeholderCode} on:input={handleInput} on:blur={() => handleBlur("code")} on:click={() => placeholderCode = ""}>
                <input type="text" maxlength="20" placeholder={placeholderPassword} on:input={handleInput} on:blur={() => handleBlur("password")} on:click={() => placeholderPassword = ""}>

                <button class="btns">Create Room</button>
                <button class="btns" on:click={modal}>Back</button>
            </div>
        </div>
    </section>
</body>

<style>
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #3C3C3B;
    }

    .container {
        text-align: center;
    }
    .headings-container h1 {
        margin: 0;
        margin-top: 2rem;
    }
    .headings-container h3 {
        margin: 0;
        margin-bottom: 3rem;
    }

    .headings-container h1 {
        font-size: 5rem;
        color: #00FF00;
    }

    .headings-container h3 {
        font-size: 3rem;
        color: white;
    }

    .input-container input {
        width: 25%;
        height: 3rem;
        padding: 0.5rem;
        background-color: #3C3C3B;
        border: 2px solid #00FF00;
        border-radius: 40px;
        color: #FFFFFF;
        outline: none;
        font-size: 24px;
        text-align: center;
    }

    .input-container input::placeholder {
        color: #FFFFFF;
    }

    .btn-container {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .btns {
        width: 18rem;
        height: 4.5rem;
        border: 4px solid #00FF00;
        border-radius: 16px;
        font-size: 24px;
        color:#3C3C3B;
        cursor: pointer;
        transition: ease-in 400ms;
        scale: 1;
    }

    .btns:hover {
        transition: ease-in 400ms;
        scale: 1.1;
    }

    .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(13, 27, 42, 0.8); /* Adjust the color and opacity as desired */
    align-items: center;
    justify-content: center;
}

.modal-container {
    display: none;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 60%;
    background-color: #3C3C3B;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    border: 2px solid #e0e1dd;
    gap: 1rem;
}

.modal-container h1 {
    font-size: 4rem;
    color:#00FF00;
    margin: 0;
    margin-bottom: 2rem;
}

.modal-container input {
        width: 40%;
        height: 3rem;
        padding: 0.5rem;
        background-color: #3C3C3B;
        border: 2px solid #00FF00;
        border-radius: 40px;
        color: #FFFFFF;
        outline: none;
        font-size: 24px;
        text-align: center;
        margin-bottom: 1rem;
}

.modal-container input::placeholder {
        color: #FFFFFF;
}


</style>