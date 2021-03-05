export interface Position {
  line: number;
  col: number;
}

export interface Range {
  start: Position;
  end: Position;
}

export const NoPosition: Position = {
  line: -1,
  col: -1,
};

export const NoRange: Range = {
  start: NoPosition,
  end: NoPosition,
};

export interface Diagnostic {
  text: string;
  range: Range;
}

export class DiagnosticsManager {
  public diagnostics = new Array<Diagnostic>();

  hasErrors(): boolean {
    return this.diagnostics.length != 0;
  }

  error(text: string, range: Range) {
    this.diagnostics.push({
      text,
      range,
    });
  }

  print(filename: string = "") {
    for (const diagnostic of this.diagnostics) {
      console.log(
        `${filename}:${diagnostic.range.start.line + 1}:${
          diagnostic.range.start.col + 1
        } - error: ${diagnostic.text}`
      );
    }
  }
}
