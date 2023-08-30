<template>
    <section class="v-text-quote" >
        <div
            class="v-text-quote__container">

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 220.11578 224.07194"
                 class="v-text-quote__img-1"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00085" y=".00142" width="220.11493" height="224.07053" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m220.08353,110.95074c.01426-.70493.02284-1.40986.02855-2.11764,0-.10559.00285-.21119.00285-.31964,0-.04281-.00285-.08562-.00285-.12842,0-.1056.00285-.20834.00285-.31394h-.0057C219.86664,48.34616,170.68995,0,110.05746,0S.24829,48.34616.0057,108.0711h-.0057c0,.10559.00285.20833.00285.31394,0,.04281-.00285.08562-.00285.12842,0,.10846.0057.21405.0057.31964.00285.70779.01141,1.41271.02569,2.11764l.01711.71064c.35675,13.74184,2.58284,27.18973,2.58284,46.46541,0,16.78702-2.63135,22.52635-2.63135,40.93728,0,13.81034,9.44662,25.00645,21.09651,25.00645,5.62802,0,10.73947-2.61709,14.52097-6.87806h148.87996c3.78152,4.26097,8.89297,6.87806,14.52384,6.87806,11.64989,0,21.09365-11.19611,21.09365-25.00645,0-18.41093-2.63137-24.15025-2.63137-40.93728,0-19.27568,2.22611-32.72357,2.58286-46.46541l.01711-.71064" style="fill: #9bcc00;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 199.69803 227.0124"
                 class="v-text-quote__img-2"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect x=".00087" width="199.69665" height="227.0121" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m198.17266,170.39819c-9.42058,16.24591-49.21089-9.28176-65.50213.08216-16.28841,9.36392-14.18896,56.55753-32.98197,56.53203-18.79585-.02833-16.55757-47.21628-32.82332-56.62553-16.2629-9.40926-56.12687,16.00508-65.50212-.26916-9.37244-16.27141,32.65614-37.93168,32.68164-56.70487.02834-18.77601-41.93792-40.55527-32.51731-56.80118,9.42058-16.24591,49.21089,9.28459,65.50213-.07933C83.31798,47.1684,81.2157-.02804,100.01155.00028c18.79584.02551,16.55756,47.21344,32.82048,56.62554,16.26292,9.40925,56.12971-16.00508,65.50213.26632,9.37525,16.27141-32.65332,37.93168-32.68165,56.70769-.0255,18.77318,41.94074,40.55245,32.52016,56.79836" style="fill: #9bcc00;"/>
                    </g>
                </g>
            </svg>

            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342.21108 149.14359"
                 class="v-text-quote__img-3"
            >
                <defs>
                    <clipPath id="clippath">
                        <rect y=".00082" width="342.21108" height="149.14087" style="fill: none;"/>
                    </clipPath>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1">
                    <g style="clip-path: url(#clippath);">
                        <path d="m342.20971,35.31126h-15.3925c-1.4445-19.73684-17.87692-35.31126-37.98304-35.31126H53.37418C33.27079,0,16.83835,15.57443,15.39116,35.31126H.00137v78.52106h15.38979c1.4472,19.73683,17.87963,35.31126,37.98302,35.31126h235.45999c20.10612,0,36.53854-15.57443,37.98304-35.31126h15.3925V35.31126Z" style="fill: #9bcc00;"/>
                    </g>
                </g>
            </svg>


            <p
                class="v-text-quote__text fp-heading-h2--xl"
                v-html="text"
            ></p>
        </div>
    </section>
</template>





<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        required: true,
    }
})

</script>





<style lang="scss" >
@use "assets/_scss-params";

.v-text-quote {
    position: relative;
    container-type: inline-size;
    padding-top: 4rem;
    padding-bottom: 4rem;
}

blockquote {
    footer {
        font-weight: 500;
        margin-top: var(--fp-line-height-small);
        font-size: var(--fp-font-size-small);
        line-height: var(--fp-line-height-small);
    }
}

.v-text-quote__container {
    box-sizing: border-box;
}

.v-text-quote__img-1 {
    position: absolute;
    top: auto;
    bottom: -2rem;
    left: 10%;
    fill: var(--fp-theme-color-secondary);
    width: 6.5rem;
    transform: translate(-50%, -50%) rotate(30deg);
    z-index: 10;

    * {
        fill: var(--fp-theme-color-secondary) !important;
    }
}

.v-text-quote__img-2 {
    position: absolute;
    top: 42%;
    left: 25%;
    fill: var(--fp-theme-color-main);
    width: 9rem;
    transform: rotate(55deg) translate(-50%, -50%);
    * {
        fill: var(--fp-theme-color-main) !important;
    }
}

.v-text-quote__img-3 {
    position: absolute;
    top: auto;
    bottom: 6%;
    right: 10%;
    fill: var(--fp-theme-color-main);
    width: 11.8rem;
    transform: rotate(140deg);

    * {
        fill: var(--fp-theme-color-main) !important;
    }
}


.v-text-quote__text {
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 5;
}

blockquote {
    margin: 0;
}
</style>
