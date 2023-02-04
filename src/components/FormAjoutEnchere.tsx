import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea } from "@ionic/react";
import { useEffect, useState } from "react";
import { baseUrl } from "../util/Api";
import Utilisateur from "../model/Utilisateur";
import axios from "axios";

export const FormAjoutEnchere: React.FC = () => {

    const [categories, setCategories] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [categorieId, setCategorieId] = useState();
    const [nomProduit, setNomProduit] = useState();
    const [prixMin, setPrixMin] = useState();
    const [duree, setDuree] = useState();
    const [descri, setDescri] = useState();
    const [img, setImg] = useState("");
    const proprietaireId = new Utilisateur().getId();

    function ajouter() {
        const url = baseUrl + "/addEnchere";
        const data = {
            "proprietaireId": proprietaireId,
            "categorieId": categorieId,
            "nomProduit": nomProduit,
            "prixMin": prixMin,
            "duree": duree,
            "descri": descri,
            "img": img
        };

        axios.post(url, data)
            .then((response) => {
                console.log(response);
            })
            .then((error) => {
                console.log(error);
            })

        window.location.assign("/profil");
    }

    function getListeCategorie() {
        const url = baseUrl + "/categories";

        axios.get(url)
            .then((response) => {
                setCategories(response.data);
                setIsLoad(true);
            })
    }

    function addImage(e: any) {
        let i = e.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(i);
        reader.onload = () => {
            const b64: any = reader.result;
            setImg(b64);
        };
    }

    useEffect(() => {
        getListeCategorie();
    }, []);

    if (!isLoad) {
        return (
            <p>Loading...</p>
        );
    } else {
        return (
            <>
                <img src={img} />

                <input type="file" onChange={addImage} /><br />

                <IonItem>
                    <IonLabel>Categorie</IonLabel>
                    <IonSelect
                        placeholder="Categorie"
                        onIonChange={(e: any) => setCategorieId(e.target.value)} >
                        {categories.map((categorie, index) => {
                            return (
                                <IonSelectOption value={categorie["id"]} key={index}>{categorie["intitule"]}</IonSelectOption>
                            );
                        })}
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">NomProduit</IonLabel>
                    <IonInput
                        onIonChange={(e: any) => setNomProduit(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Prix Min</IonLabel>
                    <IonInput
                        onIonChange={(e: any) => setPrixMin(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Duree</IonLabel>
                    <IonInput
                        onIonChange={(e: any) => setDuree(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Description</IonLabel>
                    <IonTextarea
                        onIonChange={(e: any) => setDescri(e.target.value)} />
                </IonItem>

                <IonButton
                    expand="block"
                    onClick={() => ajouter()}>Ajouter</IonButton>
            </>
        );
    }
}