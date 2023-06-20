<svelte:head>
    <title>AnonChat - Connect and Chat Anonymously</title>
</svelte:head>

<script>
    let inputValue = '';
    let placeholder = 'Display Name';

    function handleInput(event) {
        inputValue = event.target.value;
    }

    function handleBlur() {
        if (!inputValue) {
        placeholder = 'Display Name';
        }
  }
</script>

<body>
    <section class="container">
        <div class="headings-container">
            <h1>AnonChat</h1>
            <h3>Chat Anonymously</h3>
        </div>

        <div class="input-container">
            <input type="text" maxlength="25" placeholder={placeholder} on:input={handleInput} on:blur={handleBlur} on:click={() => placeholder = ""}>
        </div>

        <div class="btn-container">
            <button class="btns">Join Global Chat</button>
            <button class="btns">Create room</button>
            <button class="btns">Join Room</button>

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


</style>