<style>
    .jumbotron {
        background-image: url('/images/jumbotron.png');
        background-size: cover;
        background-position: center;
        height: 513px;
        width: 100%;
        display: flex;
    }

    .jumbotron h1 {
        font-family: 'Roboto';
        color: white;
        font-weight: 600;
        line-height: 60px;
        font-size: 48px;
        max-width: 855px;
        font-style: normal;

        /* position as in prototype, which is not yet finalized. */
        position: relative;
        top: 70px;
        left: 39px;
    }

    @media screen and (max-width: 805px) {
        .jumbotron {
            height: 300px;
        }

        .jumbotron h1 {
            font-size: 24px;
            line-height: 28px;
            top: 40px;
            left: 16px;
        }
    }
</style>
<div class="jumbotron">
    <h1>Landstown High School's innovative underwater robotics team.</h1>
</div>