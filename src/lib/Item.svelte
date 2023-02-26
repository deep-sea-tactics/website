<style>
    .list {
        border-radius: 49px;
        height: 108px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 3em;
        margin-right: 3em;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .key {
        border-right: 2.5px solid #f2f2f2;
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: 2.5em;
    }

    .value {
        height: 100%;
        border-left: 2.55px solid #f2f2f2;
        display: flex;
        align-items: center;
        padding-left: 2em;
    }

    .value h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 150.19%;
        margin-bottom: 0px;
        margin-top: 0px;
    }
</style>
<script lang="ts">
    type BrandColor = "#f2f2f2" | "#2C3289";
    export let backgroundColor: BrandColor = "#2C3289";
    const color = backgroundColor === "#f2f2f2" ? "000000" : "#f2f2f2";

    export let value: string;
</script>
<div class="list" style="background-color: {backgroundColor}; color: {color};">
    <div class="key">
        <slot></slot>
    </div>
    <div class="value">
        <h3>{value}</h3>
    </div>
</div>