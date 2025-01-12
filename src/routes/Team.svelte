<script lang="ts">
    import '../css/global.css';

    import TeamMember from './TeamMember.svelte';
    import ena from '$lib/assets/images/Team/ena.png';
    import frank from '$lib/assets/images/Team/frank.png';
    import max from '$lib/assets/images/Team/max.png';
	import Button from './Button.svelte';
    
    let { customClass = '' } = $props();
</script>

<section id="team">
    <div class="pageWrapper"> 
        <div class="pageContent">
            <div class="specialCars">
                <p class="fontStyleH6 fontColorC3 smallHeadline">Unser Team</p>
                <p class="fontStyleH3 fontColorLight largeHeadline">Die Experten für hochwertige Fahrzeugauf- und innenausbauten</p>
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 carConfigurationGrid">
                    <TeamMember name="Max Musterman" position="" teamMemberImage={max}/>
                    <TeamMember name="Frank Rittmann" position="Geschäftsführer" teamMemberImage={frank}/>
                    <TeamMember name="Ena Vasilj" position="Werksstudentin"  teamMemberImage={ena}/>
                </div>

                <div class="buttonWrapper">
                    <Button customStyle="background-color: var(--colors-color3);">Das CubicCube-Team</Button>
                </div>            
            </div>
        </div>
    </div>
</section>

<style>
    .pageWrapper
    {
        position: relative; /* to block previous square*/
    }

    .buttonWrapper{
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        background-color: var(--colors-color2);
        padding-top:50px;
    }
    
</style>