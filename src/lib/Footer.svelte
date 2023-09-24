<div class="footer">
	<div class="inner">
		<div class="copyright desktop">
			&copy; 2023 Landstown High School Deep Sea Tactics
		</div>
		<div class="copyright mobile">
			&copy; 2023
		</div>
		
		<div class="links" >
			<a href="https://www.instagram.com/ltowndst/" target="_blank" rel="noreferrer">
				<img src="/icons/instagram.svg" alt="instagram"/>
			</a>
			<a href="https://www.facebook.com/landstown.deepseatactics.1/ " target="_blank" rel="noreferrer">
				<img src="/icons/facebook.svg" alt="instagram"/>
			</a>
			<a href="https://twitter.com/deepseatactics" target="_blank" rel="noreferrer">
				<img src="/icons/x.svg" alt="instagram"/>
			</a>
		</div>
	</div>
</div>


<style>
	.footer {
		margin-top: -60px;
		width: 100%;
		height: 60px;
		line-height: 60px;
		background-color: var(--blue);
		color: var(--textColor2);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--bg);
	}
	.inner {
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	}
	.copyright {
		width: 100%;
	}
	.links {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		justify-content: flex-end;
		flex-grow: 1;
	}
	.links > a {
		margin-left: 20px;
		display: flex;
		transition: all 0.2s ease-in-out;
	}
	.links > a:hover {
		text-decoration: underline;
		scale: 1.1;
	
	}
	.links > a > img {
		filter: invert(92%) sepia(96%) saturate(112%) hue-rotate(222deg) brightness(116%) contrast(89%);
		width: 2rem;
		aspect-ratio: 1/1;
	}

	@media screen and (min-width: 1000px) {
		.desktop {
			display: block;
		}
		.mobile {
			display: none !important;
		}
	}
	@media screen and (max-width: 1000px) {
		.desktop {
			display: none;
		}
		.mobile {
			display: block !important;
		}
	}
</style>