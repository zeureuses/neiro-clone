import fs from "fs";
import path from "path";

import type { JsonData } from "./interfaces";

export function loadJsonData(): JsonData {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return data;
}
