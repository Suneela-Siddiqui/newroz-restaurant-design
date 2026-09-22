"use client";
import Image from "next/image";
import { site } from "@/data/site";
import { menu } from "@/data/menu";
import { useApp } from "./Providers";

function Row({ item, orderable }) {
  const { t, tr, addItem } = useApp();
  return (
    <div className="row">
      <div className="label">
        <div className="nm">
          {tr(item.name)}
          {(item.tags || []).map((tag) => <span className="pill" key={tag}>{t(tag)}</span>)}
        </div>
        {item.desc && <div className="sub">{tr(item.desc)}</div>}
      </div>
      <div className="price">{typeof item.price === "number" ? "$" + item.price : item.priceLabel}</div>
      {orderable && (
        typeof item.price === "number"
          ? <button className="addbtn" onClick={() => addItem(item.id)} aria-label={t("add") + " " + tr(item.name)}>{t("add")}</button>
          : <a className="callnote" href={site.phoneHref}>{t("callForThis")}</a>
      )}
    </div>
  );
}

function Category({ cat, orderable }) {
  const { tr } = useApp();
  const card = (
    <div className={"card" + (cat.theme === "dark" ? " dark" : "")}>
      <h3>{tr(cat.name)}</h3>
      {cat.blurb && <p className="blurb">{tr(cat.blurb)}</p>}
      <div className={"rows" + (cat.layout === "columns" ? " columns" : "")}>
        {cat.items.map((i) => <Row key={i.id} item={i} orderable={orderable} />)}
      </div>
    </div>
  );

  if (!cat.photos) return <section id={cat.id} className="pad" style={{ paddingTop: 24 }}>{card}</section>;

  return (
    <section id={cat.id} className="pad grid2" style={{ paddingTop: 24 }}>
      {card}
      <div className="photostack">
        {cat.photos.map((src) => {
          const g = site.gallery.find((x) => x.src === src);
          return <Image key={src} src={src} alt={g ? g.alt : ""} width={600} height={800} />;
        })}
      </div>
    </section>
  );
}

export default function MenuList({ orderable = false }) {
  const { t } = useApp();
  return (
    <>
      <section className="pad" style={{ paddingTop: 48 }}>
        <div className="sec-head">
          <div>
            <h2>{t("theMenu")}</h2>
            <p>{t("pricesNote")}</p>
          </div>
        </div>
      </section>
      {menu.map((cat) => <Category key={cat.id} cat={cat} orderable={orderable} />)}
    </>
  );
}
