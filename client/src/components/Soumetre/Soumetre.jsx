import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class Soumetre extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper content-wrapper-form col-sm-9" style={{margin: "3" }} align="center">
					<form method="post" action="/create-campaign" enctype="multipart/form-data">
						
						<div className="row jumbotron">
							<div className="col-xs-12">
								<div style={{margin: "0"}} className="form-group">
									<div style={{marginTop: "15px"}} className="file ">
										    <input type="file" id="imageFile_file" name="imageFile[file]"/>
										
                                        <label className="main-image" for="exampleInputFile">
											<span>
                                            <i class="material-icons" style={{fontSize: "30px"}}>cloud_upload</i>
                                                <br/>
                                                <b>Sélectionnez le fichier principale</b>
                                                <p><b>le fichier doit etre un fichier compresser avec un apk et un readme </b></p>
											</span>
                                            <div id="bgImageFile"></div>
                                        </label>
									</div>
								</div>
							</div>					
						</div>

						<div className="row">
							<div className="col-xs-12">
								<div className="form-group" style={{marginBottom: "0"}}>
									<label for={""}>Titre de la Soumission</label>
									<p className="help-block"><i className="fa fa-lightbulb-o"></i>
                                    &nbsp; Choisissez un titre simple et descripteur. 
                                    <span style={{color: "#D69128", fontFamily: "proxima-nova-semibold"}} className="pull-right" id="count_message_title">40  max</span></p>
									<div>
										<input type="text" id="title" name="title" maxlength="40" placeholder="Ex : Réalisons le rêve des competiseurs" className="form-control"/>						
										
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-12">
								<div className="form-group">
									<label for="exampleInputAmount">Lien personnalisé</label>
									<p className="help-block"><i className="fa fa-lightbulb-o">
                                        </i>&nbsp; Un lien court facilite le partage de votre cagnotte. Ex : ensias.com/<strong>
                                            pour-julie</strong>. <span style={{color: "#D69128", fontFamily: "proxima-nova-semibold"}} className="pull-right" id="count_message_slug">30  max</span></p>
									<div className="input-group">
										<div className="input-group-addon" style={{paddingRight: "0 !important"}}>ENSIAS.com/</div>
										<div>
											<input type="text" id="slug" name="slug" maxlength="30" className="right-round form-control" placeholder="pour-julie"/>
										</div>
									</div>
                                    <div>
                                        
                                    </div>
									<p style={{fontSize: "15px", textAlign: "center",background: "#FFFBF4",color: "#D69128"}} id="slug-text"></p>
								</div>
							</div>
							<p id="text"></p>
						</div>
										
						<div className="row">
							<div className="col-xs-12">
                                <div className="form-group form-collect">
											<label for={""}>Choisissez une catégorie de valeur ajouté</label>
											<div className="form-select ">
                                                <select id="category" name="category" className="form-control">
                                                    <option value="08528cb3-1080-11e7-979e-4dc6f682a7bd">Performence</option>
                                                    <option value="085294c9-1080-11e7-979e-4dc6f682a7bd">Rapidité</option>
                                                    <option value="08529c4c-1080-11e7-979e-4dc6f682a7bd">Simplicité</option>
                                                    <option value="0852a649-1080-11e7-979e-4dc6f682a7bd">Facile d'amélioration</option>
                                                    <option value="0852ade9-1080-11e7-979e-4dc6f682a7bd">Adaptable</option>
                                                    <option value="0852b51c-1080-11e7-979e-4dc6f682a7bd">Personnalisable</option>
                                                    <option value="0852bc56-1080-11e7-979e-4dc6f682a7bd">Sécurisé</option>
                                                    <option value="0852c380-1080-11e7-979e-4dc6f682a7bd">AUTRE</option></select>
                                                
											</div>
                                </div>
							</div>
						</div>					

                        <div className="row">
                            <div className="col-xs-12">
                                <div className="form-group">
                                    <label for={""}>Paramètres</label>
                                    <div className="clearfix"></div>
                                    <div className="col-xs-12 col-md-6">
                                        <div className="checkbox">
                                            <div className="checkbox">
                                                 <div className="checkbox icheck-success"><input type="checkbox" id="isPublic" name="isPublic" value="1" />
            <label for="isPublic">
                ME NOTIFIER APRES CHAQUE EVALUATION</label>
        </div>
    </div>
                                            
                                        </div>
                                        <div id="amountToCollectField" className="checkbox">
                                            <div className="checkbox">                                        
                                            <div className="checkbox icheck-success"><input type="checkbox" id="withAmountToCollect" name="withAmountToCollect" value="1"/>
            <label for="withAmountToCollect">
                se rappeler de mon choix</label>
        </div>
    </div>
                                            
                                        </div>									
                                    </div>
                                    <div className="col-xs-12 col-md-6">
										<div className="checkbox">
											<div className="checkbox">                                        
                                            <div className="checkbox icheck-success"><input type="checkbox" id="showDonors" name="showDonors" value="1" />
            <label for="showDonors">
                M'ENVOYER DES COMPETITIONS similaires</label>
        </div>
    </div>
											
										</div>
                                      									
                                    </div>
								</div>
							</div>
                        </div>									
						
						
							

										
							
						<div id="add-more-settings" className="add-more-settings" >
						<div className="row">
							<div className="col-xs-12">
								<div className="form-group">
									<h2 className="more-settings"><span><i class="material-icons">plus_one</i> Plus de paramètres</span></h2>
								</div>
							</div>
						</div>							
						</div>				
					
						
										

						<div className="row">
							<div className="col-xs-12">
									<div className="form-group form-collect">
											<label for={""}>Description</label>
												<p className="help-block"><i className="fa fa-lightbulb-o"></i>&nbsp; Détaillez le fonctinnement de votre application.</p>
											<div>
                                                    <textarea id="campaign_description" 
                                                    name="description" className="form-control" >
                                                        {/* &lt;p&gt;Quel que soit le montant, chacun peut participer à cette cagnotte. 
                                                        Pas besoin de créer un compte ou de s'inscrire, c'est rapide et les paiements sont 
                                                        &lt;strong&gt;100% sécurisés&lt;/strong&gt;. Possibilité de participer par Carte Bancaire ou PayPal.
                                                        &lt;/p&gt;&lt;p&gt;Si vous ne pouvez pas participer financièrement, partagez cette 
                                                        cagnotte autour de vous au maximum. &lt;strong&gt;MERCI !&lt;/strong&gt;&lt;/p&gt; */}
                                                    </textarea>
                                                    <div id="cke_campaign_description" 
                                                        className="cke_1 cke cke_reset cke_chrome cke_editor_campaign_description cke_ltr cke_browser_webkit cke_hidpi" 
                                                        dir="ltr" lang="fr" role="application" 
                                                        aria-labelledby="cke_campaign_description_arialbl">
                                                                                                <a target="_back" id="cke_13" className="cke_button cke_button__simplelink cke_button_off" href="/listSoumission" title="Ajouter un lien" 
                                                                                                tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_13_label" 
                                                                                                aria-describedby="cke_13_description" aria-haspopup="false" 
                                                                                                onkeydown={""} onfocus={""} onclick={""}>
                                                                                                    <span className={""} style={{background:"green",backgroundPosition:"0 0px",backgroundSize:"16px"}}>
                                                                                                        &nbsp;</span><span id="cke_13_label" className="cke_button_label cke_button__simplelink_label" 
                                                                                                        aria-hidden="false">Ajouter un lien</span><span id="cke_13_description" className="cke_button_label" aria-hidden="false"></span>
                                                                                                </a>
                                                                                                <a target="_back" id="cke_14" className="cke_button cke_button__videodetector cke_button_off"
                                                                                                         href="/listSoumission" title="Insert a Youtube, Vimeo or Dailymotion video"
                                                                                                          tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_14_label"
                                                                                                           aria-describedby="cke_14_description" aria-haspopup="false" 
                                                                                                           onkeydown={""} 
                                                                                                           onfocus={""} 
                                                                                                           onclick={""}><span className="cke_button_icon cke_button__videodetector_icon"
                                                                                                           style={{background:"green",backgroundPosition:"0 0px",backgroundSize:"16px"}}>
                                                                                                               &nbsp;</span><span id="cke_14_label" className="cke_button_label cke_button__videodetector_label" aria-hidden="false">
                                                                                                                   Insert a Youtube, Vimeo or Dailymotion video</span>
                                                                                                                   <span id="cke_14_description" className="cke_button_label" aria-hidden="false"></span>
                                                                                                </a>
                                                                                                                        <span id="cke_1_bottom" className="cke_bottom cke_reset_all" 
                                                                                                                        role="presentation" style={{userSelect: "none"}}>
                                                                                                                            <span id="cke_1_resizer" className="cke_resizer cke_resizer_ltr" 
                                                                                                                            title="Redimensionner" onmousedown="CKEDITOR.tools.callFunction(0, event)">◢</span>
                                                                                                                            <span id="cke_1_path_label" className="cke_voice_label">Chemin des éléments</span>
                                                                                                                            <span id="cke_1_path" className="cke_path" role="group" aria-labelledby="cke_1_path_label">
                                                                                                                                <span className="cke_path_empty">&nbsp;</span></span></span></div></div>
											</div>
											
									</div>
							</div>
						

						<div className="row">
							<div className="col-xs-12">
							{/* <input type="hidden" id="_token" name="_token" className="form-control" value="075BeUp1J6q5EmZZ-Zgjwmcf28l58_H1u3OzqVA4S-E"/> */}
							<Button type="submit" className="btn btn-small btn-plain btn-green">ENVOYER MA SOUMISSION</Button>
							</div>
						</div>
					</form>
				</div>
                
      </div>
    )
  }
}
