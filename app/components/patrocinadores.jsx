"use client";

import "../styles/semana.css";
import ItemPatrocinadorBox from "../atomic/item-patrocinador-box";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { sendEmail } from "../../lib/sendEmail";

export default function Patrocinadores() {
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    sendEmail(email);
  };

  return (
    <div className="patrocinadores">
      <p id="patrocinadores_title" className="titles">
        PATROCINADORES
      </p>
      <p id="patrocinadores_text">
        Conheça os patrocinadores da XIV Semana de Computação IME USP:
      </p>
      <Dialog>
        <DialogTrigger>
          <div className="patrocinadores_button">
            <a target="_blank" onClick={sendEmail}>
              <button>QUERO PATROCINAR!</button>
            </a>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2 className="text-4xl">Deixe seu contato</h2>
            </DialogTitle>
            <DialogDescription>
              <span className="text-xl">
                O email deve ter o domínio da empresa, pois domínios genéricos
                serão ignorados.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="email" className="text-right text-lg">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3 border-black"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose>
              <div className=" px-8 py-2 text-8 text-secondary font-bold border-2 border-black">
                <a target="_blank" onClick={sendEmail}>
                  <button>CANCELAR</button>
                </a>
              </div>
            </DialogClose>
            <div
              className="bg-ternary px-8 py-2 text-8 text-secondary font-bold border-2 border-black"
              onClick={sendEmail}
            >
              <button>ENVIAR</button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="patrocinadores_cota">
        <ItemPatrocinadorBox
          patrocinadorSite="https://www.incognia.com/pt/"
          backgroundColor="var(--bg-gold)"
          cotaPatrocinio="OURO"
          patrocinadorName="Incognia"
          imgPath="/logos/patrocinadores/logo_incognia.png"
        />

        <ItemPatrocinadorBox
          patrocinadorSite="https://www.opus-software.com.br/"
          backgroundColor="var(--bg-gold)"
          cotaPatrocinio="OURO"
          patrocinadorName="Opus Software"
          imgPath="/logos/patrocinadores/logo_opus.png"
        />

        <ItemPatrocinadorBox
          patrocinadorSite="https://www.iryasolutions.com.br/"
          backgroundColor="var(--bg-gold)"
          cotaPatrocinio="OURO"
          patrocinadorName="Irya Solutions"
          imgPath="/logos/patrocinadores/logo_irya.png"
        />

        <ItemPatrocinadorBox
          patrocinadorSite="https://brickseguros.com.br/"
          backgroundColor="var(--bg-gold)"
          cotaPatrocinio="OURO"
          patrocinadorName="brick"
          imgPath="/logos/patrocinadores/logo_brick.png"
        />

        <ItemPatrocinadorBox
          patrocinadorSite="https://qitech.com.br"
          backgroundColor="var(--bg-gold)"
          cotaPatrocinio="OURO"
          patrocinadorName="QI tech"
          imgPath="/logos/patrocinadores/logo-qi-tech.png"
        />

        <ItemPatrocinadorBox
          patrocinadorSite="https://www.btgpactual.com/"
          backgroundColor="var(--bg-gold)"
          cotaPatrocinio="OURO"
          patrocinadorName="btg pactual"
          imgPath="/logos/patrocinadores/logo-btg.png"
        />
      </div>
    </div>
  );
}
