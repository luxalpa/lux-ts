import { NoPosition, Position } from "./diagnostics";

export enum Token {
  EndOfFile,
  NewLine,
  Plus,
  Minus,
  Equals,
  Set,
  Colon,
  LCurl,
  RCurl,
  Comma,
  LParen,
  RParen,
  LSquare,
  RSquare,
  Arrow,
  Unequals,
  Semicolon,
  Move,
  Increment,
  Decrement,
  PlusEquals,
  MinusEquals,
  DivEquals,
  MultEquals,
  PercentEquals,
  Mult,
  Div,
  Percent,
  Dot,
  Elipsis,
  Coalesce,
  SafeNav,
  Question,
  Reference,
  Skip,
  Not,
  LessThan,
  GreaterThan,
  LessThanEquals,
  GreaterThanEquals,
  ImplicitDecAssign,
  LogicalAnd,
  LogicalOr,
  Struct,
  Trait,
  Impl,
  Return,
  If,
  Else,
  Break,
  Continue,
  Goto,
  For,
  Match,
  Enum,
  Alias,
  String,
  Number,
  Identifier,
  TypeIdentifier,
  MacroIdentifier,
  DecoratorIdentifier,
}

function isAlphaNum(ch: string): boolean {
  return isAlpha(ch) || (ch >= "0" && ch <= "9");
}

function isAlpha(ch: string): boolean {
  return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || ch == "_";
}

function isNumber(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}

const keywords: Record<string, Token> = {
  and: Token.LogicalAnd,
  or: Token.LogicalOr,
  struct: Token.Struct,
  impl: Token.Impl,
  if: Token.If,
  else: Token.Else,
  break: Token.Break,
  continue: Token.Continue,
  goto: Token.Goto,
  for: Token.For,
  match: Token.Match,
  enum: Token.Enum,
  return: Token.Return,
  alias: Token.Alias,
  trait: Token.Trait,
};

export class Scanner {
  constructor(public text: string) {
    this.lineOffsets = [0];
  }

  private pos: number = 0;
  private begin: number;
  private lineOffsets: number[];

  tokenStart() {
    return this.begin;
  }

  tokenEnd() {
    return this.pos;
  }

  getDiagPosition(pos: number): Position {
    // TODO: Binary search
    // We should probably only create the lineOffsets array after parsing for files that require diagnostics.
    for (let i = this.lineOffsets.length - 1; i >= 0; i--) {
      const offset = this.lineOffsets[i];
      if (offset <= pos) {
        return {
          col: pos - offset,
          line: i,
        };
      }
    }

    return NoPosition;
  }

  diagStart() {
    return this.getDiagPosition(this.tokenStart());
  }

  diagEnd() {
    return this.getDiagPosition(this.tokenEnd());
  }

  value: string;

  private newLine() {
    this.lineOffsets.push(this.pos + 1); // new line starts after the line feed char.
  }

  private getChar(offset: number = 0) {
    return this.text.charAt(this.pos + offset);
  }

  private skipWhitespaceAndComments() {
    while (true) {
      const ch = this.getChar();
      if (ch != " " && ch != "\t" && ch != "\r") {
        if (ch == "/") {
          if (this.getChar(1) == "*") {
            this.skipMultiLineComment();
            continue;
          } else if (this.getChar(1) == "/") {
            this.skipSingleLineComment();
            continue;
          }
        }
        break;
      }
      this.pos++;
    }
  }

  private scanIdentifier() {
    this.value = "";
    while (true) {
      const ch = this.getChar();
      if (!isAlphaNum(ch)) {
        break;
      }
      this.pos++;
      this.value += ch;
    }
  }

  private scanString(delimiter: string) {
    this.value = "";

    while (true) {
      const ch = this.getChar();
      if (ch == delimiter || ch == "") {
        // TODO: Support escape sequences and stuff
        break;
      }

      if (ch == "\n") {
        this.newLine();
      }

      this.pos++;
      this.value += ch;
    }
  }

  private skipSingleLineComment() {
    this.pos += 2;
    while (this.getChar() != "\n") {
      this.pos++;
    }
  }

  private skipMultiLineComment() {
    this.pos += 2;
    while (this.getChar() != "*" && this.getChar(1) != "/") {
      if (this.getChar() == "\n") {
        this.newLine();
      }
      this.pos++;
    }
    this.pos += 2;
  }

  private scanNumber() {
    this.value = "";
    while (true) {
      const ch = this.getChar();
      if (!isNumber(ch)) {
        break;
      }
      this.pos++;
      this.value += ch;
    }
  }

  private scanKeywordOrIdent(): Token {
    this.scanIdentifier();

    const firstChar = this.value[0];

    if (firstChar >= "A" && firstChar <= "Z") {
      return Token.TypeIdentifier;
    }

    if (Object.keys(keywords).includes(this.value)) {
      return keywords[this.value];
    }
    return Token.Identifier;
  }

  scan(): Token {
    this.value = "";

    this.skipWhitespaceAndComments();

    this.begin = this.pos;

    const ch = this.getChar();

    if (isNumber(ch)) {
      this.scanNumber();
      return Token.Number;
    }

    if (isAlpha(ch)) {
      return this.scanKeywordOrIdent();
    }

    switch (ch) {
      case "\n":
        this.newLine();
        this.pos++;
        return Token.NewLine;
      case "":
        this.pos++;
        return Token.EndOfFile;
      case "&":
        this.pos++;
        return Token.Reference;
      case ":":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.ImplicitDecAssign;
        }
        this.pos++;
        return Token.Colon;
      case ",":
        this.pos++;
        return Token.Comma;
      case "(":
        this.pos++;
        return Token.LParen;
      case ")":
        this.pos++;
        return Token.RParen;
      case "{":
        this.pos++;
        return Token.LCurl;
      case "}":
        this.pos++;
        return Token.RCurl;
      case "[":
        this.pos++;
        return Token.LSquare;
      case "]":
        this.pos++;
        return Token.RSquare;
      case "@":
        this.pos++;
        this.scanIdentifier();
        return Token.DecoratorIdentifier;
      case "$":
        this.pos++;
        this.scanIdentifier();
        return Token.MacroIdentifier;
      case "/":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.DivEquals;
        }
        this.pos++;
        return Token.Div;
      case "!":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.Unequals;
        }
        this.pos++;
        return Token.Not;
      case "*":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.MultEquals;
        }
        this.pos++;
        return Token.Mult;
      case "%":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.PercentEquals;
        }
        this.pos++;
        return Token.Percent;
      case "+":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.PlusEquals;
        }
        if (this.getChar(1) == "+") {
          this.pos += 2;
          return Token.Increment;
        }
        this.pos++;
        return Token.Plus;
      case "-":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.MinusEquals;
        }
        if (this.getChar(1) == "-") {
          this.pos += 2;
          return Token.Decrement;
        }
        this.pos++;
        return Token.Minus;
      case ".":
        if (this.getChar(1) == "." && this.getChar(2) == ".") {
          this.pos += 3;
          return Token.Elipsis;
        }
        this.pos++;
        return Token.Dot;
      case "=":
        if (this.getChar(1) == ">") {
          this.pos += 2;
          return Token.Arrow;
        }
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.Equals;
        }
        this.pos++;
        return Token.Set;
      case "<":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.LessThanEquals;
        }
        this.pos++;
        return Token.LessThan;
      case ">":
        if (this.getChar(1) == "=") {
          this.pos += 2;
          return Token.GreaterThanEquals;
        }
        this.pos++;
        return Token.GreaterThan;
      case '"':
      case "'":
        const delim = ch;
        this.pos++;
        this.scanString(delim);
        this.pos++;
        return Token.String;
      default:
        throw new Error("Unknown token");
    }
  }
}
