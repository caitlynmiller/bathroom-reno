"use client";

import { useState } from "react";

const BATHROOMS = [
  {
    id: "primary",
    name: "Daisy Delight",
    location: "Main Floor — Primary Bedroom",
    paintColor: "Healing Aloe (BM 1562)",
    status: "planned",
    dimensions: { showerWalls: 80, floor: 144 },
    budget: { target: 2000, estimated: 1800 },
    tiles: [
      {
        area: "Shower — back wall (feature)",
        name: "Thassos White Flower Pattern Marble Mosaic",
        details: "Thassos White + Gold Metal",
        store: "Bed Bath & Beyond",
        itemNumber: "#42926417",
        pricePerUnit: "$215.99/case",
        quantity: "3 cases (~30 sqft)",
        totalPrice: 647.97,
        notes: "Sale price — coupon does not apply. Marble daisy pattern with gold metal centers.",
        category: "feature",
      },
      {
        area: "Shower — side walls",
        name: "Daltile Restore Bright White 3x6 Subway",
        details: "Classic white ceramic subway tile",
        store: "Home Depot",
        itemNumber: "RE1536MODHD1P4",
        pricePerUnit: "~$1.20/sqft",
        quantity: "5 cases (~55 sqft)",
        totalPrice: 75,
        notes: "Brick-lay pattern. Clean white to frame the daisy feature wall.",
        category: "wall",
      },
      {
        area: "Floor",
        name: 'Daltile Lamora "Gilded White" 8x9 Hex',
        details: "Glazed porcelain, marble-look with warm gold veining",
        store: "Home Depot",
        itemNumber: "LM70HEX8MTHD",
        pricePerUnit: "$4.99/sqft ($46.76/case)",
        quantity: "17 cases (~160 sqft)",
        totalPrice: 795,
        notes: "4.8 stars, 58 reviews. No sealing required. Warm ivory veining echoes gold metal in daisy tile.",
        category: "floor",
      },
    ],
    supplies: [
      { name: "White thinset mortar", qty: "2 bags (50 lb)", price: 60, note: "Mandatory for Thassos marble — prevents discoloration" },
      { name: "White/light gray grout", qty: "2 bags (25 lb)", price: 50, note: 'Mapei Keracolor "Avalanche" or "Frost"' },
      { name: "Marble sealer", qty: "1 bottle", price: 25, note: "Apply before grouting + after installation (daisy wall only)" },
    ],
    fixtures: [
      { name: "Antique brass vanity light (2-3 light)", style: "Colonial / schoolhouse with clear glass", priceRange: "$80–$150", status: "to select" },
    ],
    designNotes: [
      "Gold metal centers in daisy tile echo antique brass fixtures",
      "Lamora hex floor veining picks up same warm gold tones",
      "White subway side walls let the daisy back wall be the star",
      "Healing Aloe bedroom walls flow naturally into the bathroom palette",
      "Mid-Victorian nature-inspired aesthetic — Catskills vacation home",
    ],
  },
  {
    id: "basement",
    name: "China Cat Sunflower",
    location: "Basement",
    paintColor: "Pale Oak (BM OC-20)",
    status: "planned",
    dimensions: { showerWalls: 60, floor: 70 },
    budget: { target: 1000, estimated: 810 },
    tiles: [
      {
        area: "Floor",
        name: "Merola Faenza Azul 13x13 Ceramic",
        details: "Blue & white china patchwork — stars, suns, and florals in faded denim blue on white. Vintage encaustic-inspired, designed by Francisco Segarra.",
        store: "Home Depot",
        itemNumber: "FPEFAEA",
        pricePerUnit: "$5.07/sqft ($60.88/case, 12.0 sqft/case) — sale price",
        quantity: "7 cases (~84 sqft w/ overage)",
        totalPrice: 426,
        notes: "4.8 stars, 142 reviews. Each 13x13 tile has nine 4\" squares with scored grout lines — stars, suns, and medallion patterns. Aged, worn look with red terracotta peeking through. Regular price $9.29/sqft ($111.47/case). No sealing required.",
        category: "floor",
      },
      {
        area: "Shower walls (corner shower)",
        name: "Affinity Tile Imagine Floral Meadow 19x19",
        details: "Wildflower pattern in scarlet, gold, sage, and violet on off-white base",
        store: "Lowe's",
        itemNumber: "FIM19FME",
        pricePerUnit: "~$35/carton (10.56 sqft/carton)",
        quantity: "6 cartons (~66 sqft w/ overage)",
        totalPrice: 210,
        notes: "Large format 19x19 porcelain. Same tile as Scarlet Begonias (loft floor) but used on walls here. Wildflowers and butterflies blooming above the blue china floor.",
        category: "wall",
      },
    ],
    supplies: [
      { name: "Standard thinset mortar", qty: "2 bags (50 lb)", price: 30, note: "Standard gray thinset fine for ceramic and porcelain" },
      { name: "White grout", qty: "1 bag (25 lb)", price: 20, note: "White or Bright White — keeps the Faenza Azul pattern crisp" },
    ],
    fixtures: [
      { name: "Antique brass vanity light (2-light)", style: "Colonial / schoolhouse with clear glass — matches all three bathrooms", priceRange: "$100–$150", status: "to select" },
    ],
    designNotes: [
      "Inspired by the Grateful Dead's 'China Cat Sunflower' — psychedelic, artsy, joyful",
      "Faenza Azul floor is like walking on a collection of vintage blue-and-white china plates",
      "Floral Meadow on shower walls — wildflowers blooming above the blue china sky below",
      "Natural stone accent wall grounds the whimsy in Catskills earth",
      "Same Floral Meadow tile as Scarlet Begonias upstairs, but on walls instead of floor — a connected thread",
      "Warm Pale Oak walls balance the cool blue floor",
      "Antique brass fixtures match all three bathrooms for whole-house cohesion",
      "The most colorful, most Dead, most psychedelic bathroom in the house",
    ],
  },
  {
    id: "second-floor",
    name: "Scarlet Begonias",
    location: "Second Floor — Loft",
    paintColor: "Boothbay Gray (HC-165) / October Mist (1495)",
    status: "planned",
    dimensions: { showerWalls: 80, floor: 120 },
    budget: { target: 1000, estimated: 735 },
    tiles: [
      {
        area: "Floor",
        name: "Affinity Tile Imagine Floral Meadow 19x19",
        details: "Wildflower pattern in scarlet, gold, sage, and violet on off-white base",
        store: "Lowe's",
        itemNumber: "FIM19FME",
        pricePerUnit: "~$35/carton (10.56 sqft/carton)",
        quantity: "13 cartons (~132 sqft w/ overage)",
        totalPrice: 455,
        notes: "Large format 19x19 porcelain. Wallpaper-like wildflower meadow pattern. No sealing required. Third-firing process ensures color consistency. Whimsical, artsy, nature-inspired.",
        category: "floor",
      },
      {
        area: "Shower walls",
        name: "Daltile Restore Bright White 3x6 Subway",
        details: "Classic white ceramic subway tile",
        store: "Home Depot",
        itemNumber: "RE1536MODHD1P4",
        pricePerUnit: "~$1.20/sqft",
        quantity: "7 cases (~88 sqft w/ overage)",
        totalPrice: 75,
        notes: "Brick-lay pattern. Clean white lets the Floral Meadow floor be the focal point.",
        category: "wall",
      },
    ],
    supplies: [
      { name: "Standard thinset mortar", qty: "2 bags (50 lb)", price: 50, note: "Standard gray thinset fine for porcelain tile" },
      { name: "White grout", qty: "2 bags (25 lb)", price: 30, note: "White or light gray — complements the off-white base of the meadow tile" },
    ],
    fixtures: [
      { name: "Antique brass vanity light (2-3 light)", style: "Colonial / schoolhouse with clear glass — matches all three bathrooms", priceRange: "$100–$150", status: "to select" },
    ],
    designNotes: [
      "Inspired by the Grateful Dead's 'Scarlet Begonias' — whimsical, artsy, nature-connected",
      "Floral Meadow's scattered wildflower pattern feels like a Catskills field in late summer",
      "Warm scarlet, gold, and sage tones create beautiful contrast against cool Boothbay Gray walls",
      "October Mist sage green in the adjacent bedroom echoes the green in the meadow pattern",
      "White subway keeps the shower bright under the loft eaves",
      "Antique brass fixtures match Daisy Delight downstairs for whole-house cohesion",
      "\"Once in a while you get shown the light, in the strangest of places if you look at it right\"",
    ],
  },
];

const STATUS_CONFIG: Record<string, { label: string; bg: string; color: string; dot: string }> = {
  planned: { label: "Planned", bg: "#e8f0e4", color: "#3d6b4c", dot: "#4a8a55" },
  "not started": { label: "Not started", bg: "#f0ece4", color: "#8a7a50", dot: "#b5a060" },
  "in progress": { label: "In progress", bg: "#e4ecf5", color: "#3a5a8a", dot: "#4a7ab5" },
  complete: { label: "Complete", bg: "#e4f0e8", color: "#2a6a45", dot: "#35885a" },
};

const CATEGORY_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  feature: { bg: "#faeeda", color: "#854f0b", border: "#d4af37" },
  wall: { bg: "#f0f0ec", color: "#5a5a55", border: "#c0bbb0" },
  floor: { bg: "#f0e8da", color: "#6a5a35", border: "#c5a55a" },
};

function formatCurrency(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

function TileCard({ tile }: { tile: typeof BATHROOMS[0]["tiles"][0] }) {
  const cat = CATEGORY_COLORS[tile.category] || CATEGORY_COLORS.wall;
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      border: `1.5px solid ${cat.border}`,
      padding: "16px 18px",
      marginBottom: 12,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
        <div>
          <span style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: ".5px",
            textTransform: "uppercase",
            background: cat.bg,
            color: cat.color,
            padding: "2px 8px",
            borderRadius: 6,
            marginBottom: 6,
          }}>{tile.area}</span>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#2a2a28", marginTop: 4 }}>{tile.name}</div>
          <div style={{ fontSize: 12.5, color: "#888580", marginTop: 2 }}>{tile.details}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#2a2a28" }}>{formatCurrency(tile.totalPrice)}</div>
        </div>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8,
        background: "#faf8f5",
        borderRadius: 8,
        padding: "10px 12px",
        fontSize: 12,
        marginTop: 10,
      }}>
        <div><span style={{ color: "#aaa8a0" }}>Store</span><br /><span style={{ color: "#555550", fontWeight: 500 }}>{tile.store}</span></div>
        <div><span style={{ color: "#aaa8a0" }}>Item</span><br /><span style={{ color: "#555550", fontWeight: 500 }}>{tile.itemNumber}</span></div>
        <div><span style={{ color: "#aaa8a0" }}>Qty</span><br /><span style={{ color: "#555550", fontWeight: 500 }}>{tile.quantity}</span></div>
      </div>
      <div style={{ fontSize: 12, color: "#999590", marginTop: 8, lineHeight: 1.5, fontStyle: "italic" }}>{tile.notes}</div>
    </div>
  );
}

function BathroomDetail({ bathroom, onBack }: { bathroom: typeof BATHROOMS[0]; onBack: () => void }) {
  const status = STATUS_CONFIG[bathroom.status];
  const tileTotal = bathroom.tiles.reduce((s, t) => s + t.totalPrice, 0);
  const supplyTotal = bathroom.supplies.reduce((s, t) => s + t.price, 0);
  const fixtureEst = bathroom.fixtures.length > 0 ? 115 : 0;
  const grandTotal = tileTotal + supplyTotal + fixtureEst;

  return (
    <div>
      <button onClick={onBack} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 13,
        color: "#8a7a50",
        fontWeight: 600,
        padding: "0 0 16px",
        fontFamily: "inherit",
      }}>
        &larr; All bathrooms
      </button>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#2a2a28", margin: 0, letterSpacing: "-0.5px" }}>{bathroom.name}</h1>
          <div style={{ fontSize: 14, color: "#888580", marginTop: 4 }}>{bathroom.location}</div>
        </div>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          fontWeight: 600,
          background: status.bg,
          color: status.color,
          padding: "5px 12px",
          borderRadius: 20,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: status.dot }} />
          {status.label}
        </span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
        marginBottom: 28,
      }}>
        {[
          { label: "Paint color", value: bathroom.paintColor },
          { label: "Shower walls", value: bathroom.dimensions.showerWalls + " sqft" },
          { label: "Floor area", value: bathroom.dimensions.floor + " sqft" },
          { label: "Est. total", value: grandTotal > 0 ? formatCurrency(grandTotal) : "TBD" },
        ].map((item, i) => (
          <div key={i} style={{
            background: "#faf8f5",
            borderRadius: 10,
            padding: "12px 14px",
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "#aaa8a0", textTransform: "uppercase", letterSpacing: ".5px" }}>{item.label}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#2a2a28", marginTop: 4 }}>{item.value}</div>
          </div>
        ))}
      </div>

      {bathroom.tiles.length > 0 ? (
        <>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2a2a28", margin: "0 0 12px", letterSpacing: "-0.3px" }}>Tile selections</h2>
          {bathroom.tiles.map((tile, i) => (
            <TileCard key={i} tile={tile} />
          ))}

          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2a2a28", margin: "24px 0 12px", letterSpacing: "-0.3px" }}>Supplies</h2>
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e5e0", overflow: "hidden" }}>
            {bathroom.supplies.map((s, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: i < bathroom.supplies.length - 1 ? "1px solid #f0ede8" : "none",
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#2a2a28" }}>{s.name}</div>
                  <div style={{ fontSize: 11.5, color: "#999590", marginTop: 2 }}>{s.note}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#2a2a28" }}>{formatCurrency(s.price)}</div>
                  <div style={{ fontSize: 11, color: "#aaa8a0" }}>{s.qty}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2a2a28", margin: "24px 0 12px", letterSpacing: "-0.3px" }}>Fixtures</h2>
          {bathroom.fixtures.map((f, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: 12,
              border: "1px solid #e8e5e0",
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#2a2a28" }}>{f.name}</div>
                <div style={{ fontSize: 12, color: "#999590", marginTop: 2 }}>{f.style}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#2a2a28" }}>{f.priceRange}</div>
                <span style={{
                  fontSize: 10,
                  fontWeight: 600,
                  background: "#faeeda",
                  color: "#854f0b",
                  padding: "2px 8px",
                  borderRadius: 6,
                  textTransform: "uppercase",
                }}>{f.status}</span>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#2a2a28", margin: "24px 0 12px", letterSpacing: "-0.3px" }}>Design notes</h2>
          <div style={{
            background: "#faf8f5",
            borderRadius: 12,
            padding: "16px 18px",
            borderLeft: "3px solid #c5a55a",
          }}>
            {bathroom.designNotes.map((note, i) => (
              <div key={i} style={{
                fontSize: 13,
                color: "#555550",
                lineHeight: 1.6,
                padding: "4px 0",
                paddingLeft: 12,
                position: "relative",
              }}>
                <span style={{ position: "absolute", left: 0, color: "#c5a55a" }}>*</span>
                {note}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 28,
            background: "linear-gradient(135deg, #f8f0e0 0%, #f0ece4 100%)",
            borderRadius: 14,
            padding: "20px 22px",
            border: "1.5px solid #d4c8a8",
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#8a7a50", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 12 }}>Budget summary</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: "#6a6550" }}>Tile</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2a2a28" }}>{formatCurrency(tileTotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: "#6a6550" }}>Supplies</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2a2a28" }}>{formatCurrency(supplyTotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: "#6a6550" }}>Fixtures (est.)</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#2a2a28" }}>~{formatCurrency(fixtureEst)}</span>
            </div>
            <div style={{ borderTop: "1.5px solid #c5b890", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#2a2a28" }}>Estimated total</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: "#2a2a28" }}>~{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </>
      ) : (
        <div style={{
          background: "#faf8f5",
          borderRadius: 14,
          padding: "40px 20px",
          textAlign: "center",
          border: "1.5px dashed #d5d0c5",
        }}>
          <div style={{ fontSize: 36, marginBottom: 12, opacity: 0.4 }}>&#9632;</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#888580" }}>Not yet designed</div>
          <div style={{ fontSize: 13, color: "#aaa8a0", marginTop: 6 }}>Tiles, fixtures, and budget haven&apos;t been selected for this bathroom yet.</div>
        </div>
      )}
    </div>
  );
}

function BathroomCard({ bathroom, onClick }: { bathroom: typeof BATHROOMS[0]; onClick: () => void }) {
  const status = STATUS_CONFIG[bathroom.status];
  const tileTotal = bathroom.tiles.reduce((s, t) => s + t.totalPrice, 0);
  const supplyTotal = bathroom.supplies.reduce((s, t) => s + t.price, 0);
  const total = tileTotal + supplyTotal + (bathroom.fixtures.length > 0 ? 115 : 0);

  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: 14,
        border: "1.5px solid #e8e5e0",
        padding: "20px 22px",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s",
        marginBottom: 12,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#c5a55a"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(180,160,100,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e5e0"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#2a2a28", letterSpacing: "-0.3px" }}>{bathroom.name}</div>
          <div style={{ fontSize: 13, color: "#888580", marginTop: 3 }}>{bathroom.location}</div>
        </div>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          fontSize: 11,
          fontWeight: 600,
          background: status.bg,
          color: status.color,
          padding: "4px 10px",
          borderRadius: 16,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: status.dot }} />
          {status.label}
        </span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 8,
        marginTop: 14,
      }}>
        <div style={{ background: "#faf8f5", borderRadius: 8, padding: "8px 10px" }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#bbb8b0", textTransform: "uppercase", letterSpacing: ".4px" }}>Floor</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#555550", marginTop: 2 }}>{bathroom.dimensions.floor} sqft</div>
        </div>
        <div style={{ background: "#faf8f5", borderRadius: 8, padding: "8px 10px" }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#bbb8b0", textTransform: "uppercase", letterSpacing: ".4px" }}>Walls</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#555550", marginTop: 2 }}>{bathroom.dimensions.showerWalls} sqft</div>
        </div>
        <div style={{ background: "#faf8f5", borderRadius: 8, padding: "8px 10px" }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#bbb8b0", textTransform: "uppercase", letterSpacing: ".4px" }}>Budget</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#555550", marginTop: 2 }}>{total > 0 ? formatCurrency(total) : "TBD"}</div>
        </div>
      </div>

      {bathroom.tiles.length > 0 && (
        <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {bathroom.tiles.map((t, i) => (
            <span key={i} style={{
              fontSize: 10.5,
              fontWeight: 500,
              background: CATEGORY_COLORS[t.category]?.bg || "#f0f0ec",
              color: CATEGORY_COLORS[t.category]?.color || "#555",
              padding: "3px 8px",
              borderRadius: 6,
            }}>
              {t.name.length > 30 ? t.name.substring(0, 28) + "..." : t.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const bathrooms = BATHROOMS;

  const totalBudget = bathrooms.reduce((s, b) => {
    const t = b.tiles.reduce((a, t2) => a + t2.totalPrice, 0);
    const sp = b.supplies.reduce((a, s2) => a + s2.price, 0);
    const f = b.fixtures.length > 0 ? 115 : 0;
    return s + t + sp + f;
  }, 0);

  const planned = bathrooms.filter(b => b.status === "planned").length;
  const notStarted = bathrooms.filter(b => b.status === "not started").length;

  if (selected !== null) {
    return (
      <div style={{
        fontFamily: '"Instrument Serif", Georgia, serif',
        maxWidth: 640,
        margin: "0 auto",
        padding: "24px 16px",
        minHeight: "100vh",
        background: "#fefdfb",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=DM+Sans:wght@400;500;600;700&display=swap');
          * { box-sizing: border-box; font-family: "DM Sans", sans-serif; }
        `}</style>
        <BathroomDetail bathroom={bathrooms[selected]} onBack={() => setSelected(null)} />
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 640,
      margin: "0 auto",
      padding: "24px 16px",
      minHeight: "100vh",
      background: "#fefdfb",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; font-family: "DM Sans", sans-serif; }
      `}</style>

      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#c5a55a", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 6 }}>Phoenicia, NY</div>
        <h1 style={{ fontSize: 30, fontWeight: 700, color: "#2a2a28", margin: 0, fontFamily: '"Instrument Serif", Georgia, serif', letterSpacing: "-0.5px" }}>Bathroom Renovations</h1>
        <div style={{ fontSize: 13, color: "#999590", marginTop: 4 }}>3 bathrooms — tile, fixtures & budget tracker</div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
        marginBottom: 24,
      }}>
        <div style={{ background: "#f0e8da", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#8a7a50", textTransform: "uppercase", letterSpacing: ".5px" }}>Total est.</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#2a2a28", marginTop: 3 }}>{totalBudget > 0 ? formatCurrency(totalBudget) : "TBD"}</div>
        </div>
        <div style={{ background: "#e8f0e4", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#3d6b4c", textTransform: "uppercase", letterSpacing: ".5px" }}>Planned</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#2a2a28", marginTop: 3 }}>{planned}</div>
        </div>
        <div style={{ background: "#f0ece4", borderRadius: 10, padding: "12px 14px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#8a7a50", textTransform: "uppercase", letterSpacing: ".5px" }}>Not started</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#2a2a28", marginTop: 3 }}>{notStarted}</div>
        </div>
      </div>

      <div style={{ fontSize: 12, fontWeight: 600, color: "#aaa8a0", textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 10 }}>All bathrooms</div>

      {bathrooms.map((b, i) => (
        <BathroomCard key={b.id} bathroom={b} onClick={() => setSelected(i)} />
      ))}

      <div style={{
        marginTop: 24,
        padding: "16px 18px",
        background: "#faf8f5",
        borderRadius: 12,
        borderLeft: "3px solid #c5a55a",
      }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#8a7a50", marginBottom: 6 }}>House details</div>
        <div style={{ fontSize: 12.5, color: "#888580", lineHeight: 1.7 }}>
          Exterior: Dark navy siding, white trim, brick chimney, gambrel roof<br />
          Main room + hallways: Pale Oak (OC-20) | Ceilings: White Dove (OC-17)<br />
          Primary bedroom: Healing Aloe (1562) | Loft 1: Boothbay Gray (HC-165)<br />
          Loft 2: October Mist (1495) | Basement: Pale Oak (OC-20) + natural stone wall
        </div>
      </div>
    </div>
  );
}
