<script lang="ts">
    import '../css/global.css';
    import logo from '$lib/assets/images/cubicCubeLogo.png';
    import Button from './Button.svelte';

    let { customClass = '' } = $props();

    let isHamburgerMenuOpened = $state(false);
    function handleClick(event: MouseEvent) {
        isHamburgerMenuOpened = !isHamburgerMenuOpened;
        event.preventDefault();
    }

    function closeMenu(event: MouseEvent) 
    {
        isHamburgerMenuOpened = false;
    }
</script>
<div style="position: relative;">
    <div class="mobileMenuContent {isHamburgerMenuOpened ? "open" : ""}">
        <div class="grid grid-rows-5 h-screen">
            <div></div>
            <a class="align-middle pageButton" href="/ueberUns" on:click={closeMenu}>Über uns</a>
            <a class="align-middle pageButton" href="/modelle" on:click={closeMenu}>Modelle</a>
            <a class="align-middle pageButton" href="/kontakt" on:click={closeMenu}>Kontakt</a>
            <div class="align-middle">
                <Button link="/kontakt#kontaktFrame" customStyle="width: 80%; margin-left: 10%; font-weight: bold;" onClick={closeMenu}>Jetzt beraten lassen</Button>  
            </div>
        </div>
    </div>
    <div class="pageWrapper">
        <div class="pageContent">
            <div class="grid grid-cols-2 headerGrid {customClass}">
                <div class="align-middle">
                    <a href="/"><img alt="Cubic Cube" src={logo} /></a>
                </div>
                <div class="hamburgerMenuColumn" >
                    <a href="#" on:click={handleClick} aria-label="hamburgerMenu" id="hamburgerMenu" class="justify-self-end {isHamburgerMenuOpened ? "open" : ""}">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>                
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

.mobileMenuContent.open
{
    opacity: 1;
    top: 0;
}

.mobileMenuContent
{
    z-index: 1000;
    opacity: 0;
    transition: all 0.5s;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: -100vh;
    left: 0;
    background-color: var(--colors-color2);
}

.hamburgerMenuColumn
{
    display: grid;
    grid-template-columns: 1fr auto;
    position: relative;
    width: 100%;
}

#hamburgerMenu {
  margin-left: auto;
  display: block;
  width: 60px;
  height: 45px; 
  right: 20px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#hamburgerMenu div {
  display: block;
  position: absolute;
  height: 6px;
  width: 100%;
  background: var(--colors-primary);
  border-radius: 3px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

    #hamburgerMenu div:nth-child(1) {
  top: 0px;
}

#hamburgerMenu div:nth-child(2),#hamburgerMenu div:nth-child(3) {
  top: 18px;
}

#hamburgerMenu div:nth-child(4) {
  top: 36px;
}

#hamburgerMenu.open div:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

#hamburgerMenu.open div:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#hamburgerMenu.open div:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#hamburgerMenu.open div:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}



    .pageWrapper{
        border-bottom: 3px solid #A6D760; 
        position: fixed;
        width: 100%;
        z-index: 1001;
        background-color: var(--colors-color2);
    }

    .pageContent
    {
        padding: 0;
    }

    .headerGrid
    {
        height: 91px; 
    }

    .headerGrid > a,
    .headerGrid > div
    {
        margin: auto;
        color: var(--colors-light);
    }

    .headerGrid img
    {
        width: 204px; 
    }

    @media (width > 60rem) { 
        .pageWrapper
        {
            display: none;
        }   
    }

    .pageButton{
        font-family: "Sans Serif Pro", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 35px;
        padding: 5px 10px;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        width: 80%; 
        margin-left: 10%;
        text-align: center;
        color: var(--colors-light)
    }
</style>
