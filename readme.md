## **1. ISO 3166 Country Codes (Standardized by International Organization for Standardization)**

### **ISO 3166-1 Alpha-2 (2-letter codes)**

- **Example:** `US` (United States), `DE` (Germany), `JP` (Japan)
- **Status:** **Constant** (officially assigned, rarely changes unless a country dissolves/renames).
- **Usage:** Internet domains (.us, .de), shipping, passports.

### **ISO 3166-1 Alpha-3 (3-letter codes)**

- **Example:** `USA` (United States), `DEU` (Germany), `JPN` (Japan)
- **Status:** **Constant** (like Alpha-2, but some historical changes occur, e.g., `ZAR` → `COD` for Congo).
- **Usage:** Sports, international treaties, databases.

### **ISO 3166-1 Numeric (3-digit codes)**

- **Example:** `840` (USA), `276` (Germany), `392` (Japan)
- **Status:** **Mostly Constant** (assigned permanently, even if a country dissolves; e.g., `YU` for Yugoslavia still exists numerically).
- **Usage:** Statistical, banking, and non-language-dependent systems.

### **ISO 3166-2 (Subdivision Codes)**

- **Example:** `US-CA` (California, USA), `DE-BY` (Bavaria, Germany)
- **Status:** **Variable** (changes if administrative divisions are renamed or restructured).
- **Usage:** Geographic databases, government records.

---

## **2. UN M49 Codes (United Nations Standard)**

- **Example:** `840` (USA), `826` (UK), `010` (Antarctica)
- **Status:** **Mostly Constant** (updated for geopolitical changes, e.g., `891` for Yugoslavia no longer used).
- **Usage:** UN statistics, economic reporting.

---

## **3. Top-Level Domain (ccTLD) Codes (IANA Managed)**

- **Example:** `.us`, `.uk`, `.de`
- **Status:** **Mostly Constant** (rarely revoked, but new ones added, e.g., `.ss` for South Sudan in 2011).
- **Usage:** Internet domain registration.

---

## **4. International Dialing Codes (ITU-T E.164)**

- **Example:** `+1` (USA/Canada), `+44` (UK), `+81` (Japan)
- **Status:** **Mostly Constant** (rarely change, but exceptions exist, e.g., `+7` was shared by USSR, now mostly Russia/Kazakhstan).
- **Usage:** Telecommunications.

---

## **5. Olympic Country Codes (IOC)**

- **Example:** `USA`, `GBR`, `GER`
- **Status:** **Variable** (changes if a country is banned or renamed, e.g., `RU` → `ROC` for Russia in 2020 Olympics).
- **Usage:** Sports events, Olympics.

---

## **6. FIFA Country Codes**

- **Example:** `USA`, `ENG` (England), `GER`
- **Status:** **Variable** (some codes differ from ISO, e.g., `WAL` for Wales instead of `GB-WLS`).
- **Usage:** Football (soccer) tournaments.

---

## **7. Vehicle Registration Codes**

- **Example:** `USA` (United States), `D` (Germany), `J` (Japan)
- **Status:** **Mostly Constant** (but may change due to political shifts, e.g., `CS` for Czechoslovakia → `CZ`/`SK`).
- **Usage:** License plates, international traffic.

---

## **8. NATO Country Codes (STANAG 1059)**

- **Example:** `US` (USA), `DE` (Germany), `UK` (United Kingdom)
- **Status:** **Mostly Constant** (similar to ISO but with exceptions, e.g., `EL` for Greece instead of `GR`).
- **Usage:** Military, NATO operations.

---

## **9. IATA Country Codes (Airline Industry)**

- **Example:** `US`, `DE`, `JP`
- **Status:** **Mostly Constant** (usually matches ISO Alpha-2, but exceptions exist).
- **Usage:** Airline ticketing, baggage handling.

---

## **10. FIPS Country Codes (US Federal Standard)**

- **Example:** `US` (USA), `GM` (Germany), `JA` (Japan)
- **Status:** **Deprecated** (phased out in favor of ISO codes, but still in some legacy systems).
- **Usage:** Old US government databases.

---

### **Summary Table: Are Country Codes Constant or Variable?**

| **Code Type**     | **Constant?** | **Notes**                                                |
| ----------------- | ------------- | -------------------------------------------------------- |
| **ISO Alpha-2**   | ✅ Mostly     | Rare changes (e.g., `TL` for Timor-Leste replaced `TP`). |
| **ISO Alpha-3**   | ✅ Mostly     | Some historical adjustments.                             |
| **ISO Numeric**   | ✅ Yes        | Rarely reassigned.                                       |
| **UN M49**        | ✅ Mostly     | Updated for geopolitical changes.                        |
| **ccTLD**         | ✅ Mostly     | New ones added, rarely removed.                          |
| **Dialing Codes** | ✅ Mostly     | Rare changes (e.g., `+7` split after USSR).              |
| **Olympic (IOC)** | ❌ Variable   | Changes due to bans/renames (e.g., `ROC` for Russia).    |
| **FIFA Codes**    | ❌ Variable   | Some differ from ISO (e.g., `WAL` for Wales).            |
| **Vehicle Codes** | ✅ Mostly     | Some historical changes.                                 |
| **NATO Codes**    | ✅ Mostly     | Exceptions like `EL` for Greece.                         |
| **IATA Codes**    | ✅ Mostly     | Mostly aligns with ISO.                                  |
| **FIPS Codes**    | ❌ Deprecated | No longer updated.                                       |
