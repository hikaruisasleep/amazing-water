<svg width="0" height="0">
	<filter id="turb" x="0%" y="0%" height="100%" width="100%">
		<feTurbulence type="turbulence" baseFrequency="0.0025" numOctaves="5" />
		<feDisplacementMap
			in2="turbulence"
			in="SourceGraphic"
			scale="150"
			xChannelSelector="R"
			yChannelSelector="G"
		/>
	</filter>
</svg>
<div
	id="background"
	class="fixed h-screen max-h-full w-screen max-w-full flex flex-col justify-center items-center overflow-clip scale-110"
>
	<div class="h-[800px] w-[4000px] rotate-45 animate-right-pan">
		{#each [...Array(125)] as _}
			<div class="h-[0.1rem] w-full bg-[#65adff] mb-[1.5rem]"></div>
		{/each}
	</div>
</div>

<style>
	div#background {
		filter: url(#turb) blur(4px);
	}
</style>
