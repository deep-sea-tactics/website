<style>
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #f2f2f2;
    }

    .logo {
        width: 380px;
        height: 121px;
        margin-left: 16px;
    }

    .links {
        margin-right: 24px;
        font-size: 24px;
        font-family: 'Bebas Neue';
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0.27em;
        color: #000000;
        text-align: right;
        text-decoration: none;
    }

    .links a {
        color: inherit;
        text-decoration: inherit;
        margin-left: 16px;
        margin-right: 16px;
    }

    @media screen and (max-width: 805px) {
        .navbar {
            flex-direction: column;
            text-align: center;
        }

        .logo {
            width: 80%;
            height: auto;
            margin: auto;
        }

        .links {
            margin: 0;
            font-size: 18px;
            line-height: 21px;
            margin-top: 16px;
            text-align: center;
        }
    }
</style>
<div class="navbar">
    <img src="/images/horizontal_logo.png" alt="Logo" class="logo"/>
    <div class="links">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#donate">Donate</a>
    </div>
</div>