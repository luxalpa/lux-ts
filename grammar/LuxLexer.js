// Generated from C:/projects/lux-ts/grammar\LuxLexer.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002=\u01ac\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0003\u0002\u0005\u0002",
    "\u0089\n\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u008d\n\u0002\u0003",
    "\u0002\u0007\u0002\u0090\n\u0002\f\u0002\u000e\u0002\u0093\u000b\u0002",
    "\u0003\u0002\u0005\u0002\u0096\n\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002\u009a\n\u0002\u0003\u0002\u0007\u0002\u009d\n\u0002\f\u0002\u000e",
    "\u0002\u00a0\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "\u00a5\n\u0002\u0003\u0002\u0007\u0002\u00a8\n\u0002\f\u0002\u000e\u0002",
    "\u00ab\u000b\u0002\u0005\u0002\u00ad\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00bb\n",
    "\u0007\f\u0007\u000e\u0007\u00be\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0007\b\u00cb\n\b\f\b\u000e\b\u00ce\u000b\b\u0005\b",
    "\u00d0\n\b\u0003\b\u0003\b\u0003\t\u0006\t\u00d5\n\t\r\t\u000e\t\u00d6",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003",
    ",\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00031\u00032\u00032\u00032\u00033\u0003",
    "3\u00033\u00033\u00033\u00033\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00035\u00035\u00035\u00036\u00036\u00036\u00036\u00036\u0003",
    "7\u00037\u00037\u00037\u00037\u00037\u00038\u00038\u00038\u00038\u0003",
    "8\u00038\u00038\u00038\u00038\u00039\u00039\u00039\u00039\u00039\u0003",
    ":\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003;\u0003;\u0003;\u0003",
    "<\u0003<\u0003<\u0003<\u0003<\u0003=\u0003=\u0003=\u0007=\u017c\n=\f",
    "=\u000e=\u017f\u000b=\u0003=\u0003=\u0003=\u0003=\u0007=\u0185\n=\f",
    "=\u000e=\u0188\u000b=\u0003=\u0005=\u018b\n=\u0003>\u0003>\u0003>\u0003",
    ">\u0005>\u0191\n>\u0003?\u0003?\u0003?\u0003?\u0003?\u0003?\u0003@\u0003",
    "@\u0003@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003C\u0007",
    "C\u01a4\nC\fC\u000eC\u01a7\u000bC\u0003C\u0003C\u0005C\u01ab\nC\u0003",
    "\u00bc\u0002D\u0003\u0003\u0005\u0002\u0007\u0002\t\u0002\u000b\u0004",
    "\r\u0005\u000f\u0006\u0011\u0007\u0013\b\u0015\t\u0017\n\u0019\u000b",
    "\u001b\f\u001d\r\u001f\u000e!\u000f#\u0010%\u0011\'\u0012)\u0013+\u0014",
    "-\u0015/\u00161\u00173\u00185\u00197\u001a9\u001b;\u001c=\u001d?\u001e",
    "A\u001fC E!G\"I#K$M%O&Q\'S(U)W*Y+[,]-_.a/c0e1g2i3k4m5o6q7s8u9w:y;{\u0002",
    "}\u0002\u007f\u0002\u0081\u0002\u0083<\u0085=\u0003\u0002\r\u0005\u0002",
    "2;C\\c|\u0004\u0002C\\c|\u0003\u00022;\u0003\u0002\f\f\u0004\u0002\f",
    "\f%%\u0005\u0002\u000b\u000b\u000f\u000f\"\"\u0004\u0002$$^^\u0004\u0002",
    "^^bb\u000b\u0002$$11^^bbddhhppttvv\u0005\u00022;CHch\u0006\u0002//2",
    ";C\\c|\u0002\u01bb\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002",
    "G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003",
    "\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002",
    "\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002",
    "\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002\u0002",
    "\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002\u0002",
    "]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003",
    "\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002",
    "\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002\u0002",
    "\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002\u0002",
    "\u0002o\u0003\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002",
    "s\u0003\u0002\u0002\u0002\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003",
    "\u0002\u0002\u0002\u0002y\u0003\u0002\u0002\u0002\u0002\u0083\u0003",
    "\u0002\u0002\u0002\u0002\u0085\u0003\u0002\u0002\u0002\u0003\u00ac\u0003",
    "\u0002\u0002\u0002\u0005\u00ae\u0003\u0002\u0002\u0002\u0007\u00b0\u0003",
    "\u0002\u0002\u0002\t\u00b2\u0003\u0002\u0002\u0002\u000b\u00b4\u0003",
    "\u0002\u0002\u0002\r\u00b6\u0003\u0002\u0002\u0002\u000f\u00cf\u0003",
    "\u0002\u0002\u0002\u0011\u00d4\u0003\u0002\u0002\u0002\u0013\u00da\u0003",
    "\u0002\u0002\u0002\u0015\u00dc\u0003\u0002\u0002\u0002\u0017\u00de\u0003",
    "\u0002\u0002\u0002\u0019\u00e0\u0003\u0002\u0002\u0002\u001b\u00e2\u0003",
    "\u0002\u0002\u0002\u001d\u00e4\u0003\u0002\u0002\u0002\u001f\u00e6\u0003",
    "\u0002\u0002\u0002!\u00e8\u0003\u0002\u0002\u0002#\u00ea\u0003\u0002",
    "\u0002\u0002%\u00ed\u0003\u0002\u0002\u0002\'\u00ef\u0003\u0002\u0002",
    "\u0002)\u00f2\u0003\u0002\u0002\u0002+\u00f5\u0003\u0002\u0002\u0002",
    "-\u00f7\u0003\u0002\u0002\u0002/\u00f9\u0003\u0002\u0002\u00021\u00fc",
    "\u0003\u0002\u0002\u00023\u00ff\u0003\u0002\u0002\u00025\u0102\u0003",
    "\u0002\u0002\u00027\u0105\u0003\u0002\u0002\u00029\u0108\u0003\u0002",
    "\u0002\u0002;\u010b\u0003\u0002\u0002\u0002=\u010e\u0003\u0002\u0002",
    "\u0002?\u0111\u0003\u0002\u0002\u0002A\u0113\u0003\u0002\u0002\u0002",
    "C\u0115\u0003\u0002\u0002\u0002E\u0117\u0003\u0002\u0002\u0002G\u0119",
    "\u0003\u0002\u0002\u0002I\u011b\u0003\u0002\u0002\u0002K\u011e\u0003",
    "\u0002\u0002\u0002M\u0121\u0003\u0002\u0002\u0002O\u0123\u0003\u0002",
    "\u0002\u0002Q\u0125\u0003\u0002\u0002\u0002S\u0127\u0003\u0002\u0002",
    "\u0002U\u0129\u0003\u0002\u0002\u0002W\u012d\u0003\u0002\u0002\u0002",
    "Y\u0131\u0003\u0002\u0002\u0002[\u0134\u0003\u0002\u0002\u0002]\u0136",
    "\u0003\u0002\u0002\u0002_\u0138\u0003\u0002\u0002\u0002a\u013a\u0003",
    "\u0002\u0002\u0002c\u013d\u0003\u0002\u0002\u0002e\u0140\u0003\u0002",
    "\u0002\u0002g\u0146\u0003\u0002\u0002\u0002i\u014d\u0003\u0002\u0002",
    "\u0002k\u0150\u0003\u0002\u0002\u0002m\u0155\u0003\u0002\u0002\u0002",
    "o\u015b\u0003\u0002\u0002\u0002q\u0164\u0003\u0002\u0002\u0002s\u0169",
    "\u0003\u0002\u0002\u0002u\u016d\u0003\u0002\u0002\u0002w\u0173\u0003",
    "\u0002\u0002\u0002y\u018a\u0003\u0002\u0002\u0002{\u018c\u0003\u0002",
    "\u0002\u0002}\u0192\u0003\u0002\u0002\u0002\u007f\u0198\u0003\u0002",
    "\u0002\u0002\u0081\u019c\u0003\u0002\u0002\u0002\u0083\u019e\u0003\u0002",
    "\u0002\u0002\u0085\u01aa\u0003\u0002\u0002\u0002\u0087\u0089\u0007/",
    "\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u0091\u0005\t",
    "\u0005\u0002\u008b\u008d\u0007\"\u0002\u0002\u008c\u008b\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002",
    "\u0002\u0002\u008e\u0090\u0005\t\u0005\u0002\u008f\u008c\u0003\u0002",
    "\u0002\u0002\u0090\u0093\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u00ad\u0003\u0002",
    "\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0096\u0007/",
    "\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u009e\u0005\t",
    "\u0005\u0002\u0098\u009a\u0007\"\u0002\u0002\u0099\u0098\u0003\u0002",
    "\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002",
    "\u0002\u0002\u009b\u009d\u0005\t\u0005\u0002\u009c\u0099\u0003\u0002",
    "\u0002\u0002\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002",
    "\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002",
    "\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a2\u00070",
    "\u0002\u0002\u00a2\u00a9\u0005\t\u0005\u0002\u00a3\u00a5\u0007\"\u0002",
    "\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8\u0005\t\u0005",
    "\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002",
    "\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002",
    "\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002",
    "\u0002\u00ac\u0088\u0003\u0002\u0002\u0002\u00ac\u0095\u0003\u0002\u0002",
    "\u0002\u00ad\u0004\u0003\u0002\u0002\u0002\u00ae\u00af\t\u0002\u0002",
    "\u0002\u00af\u0006\u0003\u0002\u0002\u0002\u00b0\u00b1\t\u0003\u0002",
    "\u0002\u00b1\b\u0003\u0002\u0002\u0002\u00b2\u00b3\t\u0004\u0002\u0002",
    "\u00b3\n\u0003\u0002\u0002\u0002\u00b4\u00b5\t\u0005\u0002\u0002\u00b5",
    "\f\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007%\u0002\u0002\u00b7\u00b8",
    "\u0007%\u0002\u0002\u00b8\u00bc\u0003\u0002\u0002\u0002\u00b9\u00bb",
    "\u000b\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00be",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba",
    "\u0003\u0002\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002\u0002\u00be\u00bc",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007%\u0002\u0002\u00c0\u00c1",
    "\u0007%\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\b\u0007\u0002\u0002\u00c3\u000e\u0003\u0002\u0002\u0002\u00c4\u00d0",
    "\u0007%\u0002\u0002\u00c5\u00c6\u0007%\u0002\u0002\u00c6\u00d0\n\u0006",
    "\u0002\u0002\u00c7\u00c8\u0007%\u0002\u0002\u00c8\u00cc\n\u0006\u0002",
    "\u0002\u00c9\u00cb\n\u0005\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002",
    "\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002",
    "\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002",
    "\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00c4\u0003\u0002\u0002",
    "\u0002\u00cf\u00c5\u0003\u0002\u0002\u0002\u00cf\u00c7\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2\b\b\u0002\u0002",
    "\u00d2\u0010\u0003\u0002\u0002\u0002\u00d3\u00d5\t\u0007\u0002\u0002",
    "\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002",
    "\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\b\t\u0002\u0002\u00d9",
    "\u0012\u0003\u0002\u0002\u0002\u00da\u00db\u0007<\u0002\u0002\u00db",
    "\u0014\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007*\u0002\u0002\u00dd",
    "\u0016\u0003\u0002\u0002\u0002\u00de\u00df\u0007+\u0002\u0002\u00df",
    "\u0018\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007}\u0002\u0002\u00e1",
    "\u001a\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007\u007f\u0002\u0002\u00e3",
    "\u001c\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007]\u0002\u0002\u00e5",
    "\u001e\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007_\u0002\u0002\u00e7",
    " \u0003\u0002\u0002\u0002\u00e8\u00e9\u0007.\u0002\u0002\u00e9\"\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0007?\u0002\u0002\u00eb\u00ec\u0007",
    "@\u0002\u0002\u00ec$\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007?\u0002",
    "\u0002\u00ee&\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007?\u0002\u0002",
    "\u00f0\u00f1\u0007?\u0002\u0002\u00f1(\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0007#\u0002\u0002\u00f3\u00f4\u0007?\u0002\u0002\u00f4*\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0007=\u0002\u0002\u00f6,\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0007-\u0002\u0002\u00f8.\u0003\u0002\u0002",
    "\u0002\u00f9\u00fa\u0007/\u0002\u0002\u00fa\u00fb\u0007@\u0002\u0002",
    "\u00fb0\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007-\u0002\u0002\u00fd",
    "\u00fe\u0007-\u0002\u0002\u00fe2\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0007/\u0002\u0002\u0100\u0101\u0007/\u0002\u0002\u01014\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0007-\u0002\u0002\u0103\u0104\u0007?\u0002",
    "\u0002\u01046\u0003\u0002\u0002\u0002\u0105\u0106\u0007/\u0002\u0002",
    "\u0106\u0107\u0007?\u0002\u0002\u01078\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u00071\u0002\u0002\u0109\u010a\u0007?\u0002\u0002\u010a:\u0003",
    "\u0002\u0002\u0002\u010b\u010c\u0007,\u0002\u0002\u010c\u010d\u0007",
    "?\u0002\u0002\u010d<\u0003\u0002\u0002\u0002\u010e\u010f\u0007\'\u0002",
    "\u0002\u010f\u0110\u0007?\u0002\u0002\u0110>\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0007/\u0002\u0002\u0112@\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0007,\u0002\u0002\u0114B\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u00071\u0002\u0002\u0116D\u0003\u0002\u0002\u0002\u0117\u0118\u0007",
    "\'\u0002\u0002\u0118F\u0003\u0002\u0002\u0002\u0119\u011a\u00070\u0002",
    "\u0002\u011aH\u0003\u0002\u0002\u0002\u011b\u011c\u0007A\u0002\u0002",
    "\u011c\u011d\u0007A\u0002\u0002\u011dJ\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0007A\u0002\u0002\u011f\u0120\u00070\u0002\u0002\u0120L\u0003",
    "\u0002\u0002\u0002\u0121\u0122\u0007A\u0002\u0002\u0122N\u0003\u0002",
    "\u0002\u0002\u0123\u0124\u0007(\u0002\u0002\u0124P\u0003\u0002\u0002",
    "\u0002\u0125\u0126\u0007\u0080\u0002\u0002\u0126R\u0003\u0002\u0002",
    "\u0002\u0127\u0128\u0007a\u0002\u0002\u0128T\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u00070\u0002\u0002\u012a\u012b\u00070\u0002\u0002\u012b",
    "\u012c\u00070\u0002\u0002\u012cV\u0003\u0002\u0002\u0002\u012d\u012e",
    "\u0007c\u0002\u0002\u012e\u012f\u0007p\u0002\u0002\u012f\u0130\u0007",
    "f\u0002\u0002\u0130X\u0003\u0002\u0002\u0002\u0131\u0132\u0007q\u0002",
    "\u0002\u0132\u0133\u0007t\u0002\u0002\u0133Z\u0003\u0002\u0002\u0002",
    "\u0134\u0135\u0007#\u0002\u0002\u0135\\\u0003\u0002\u0002\u0002\u0136",
    "\u0137\u0007@\u0002\u0002\u0137^\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0007>\u0002\u0002\u0139`\u0003\u0002\u0002\u0002\u013a\u013b\u0007",
    "@\u0002\u0002\u013b\u013c\u0007?\u0002\u0002\u013cb\u0003\u0002\u0002",
    "\u0002\u013d\u013e\u0007>\u0002\u0002\u013e\u013f\u0007?\u0002\u0002",
    "\u013fd\u0003\u0002\u0002\u0002\u0140\u0141\u0007e\u0002\u0002\u0141",
    "\u0142\u0007n\u0002\u0002\u0142\u0143\u0007c\u0002\u0002\u0143\u0144",
    "\u0007u\u0002\u0002\u0144\u0145\u0007u\u0002\u0002\u0145f\u0003\u0002",
    "\u0002\u0002\u0146\u0147\u0007t\u0002\u0002\u0147\u0148\u0007g\u0002",
    "\u0002\u0148\u0149\u0007v\u0002\u0002\u0149\u014a\u0007w\u0002\u0002",
    "\u014a\u014b\u0007t\u0002\u0002\u014b\u014c\u0007p\u0002\u0002\u014c",
    "h\u0003\u0002\u0002\u0002\u014d\u014e\u0007k\u0002\u0002\u014e\u014f",
    "\u0007h\u0002\u0002\u014fj\u0003\u0002\u0002\u0002\u0150\u0151\u0007",
    "g\u0002\u0002\u0151\u0152\u0007n\u0002\u0002\u0152\u0153\u0007u\u0002",
    "\u0002\u0153\u0154\u0007g\u0002\u0002\u0154l\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0007d\u0002\u0002\u0156\u0157\u0007t\u0002\u0002\u0157",
    "\u0158\u0007g\u0002\u0002\u0158\u0159\u0007c\u0002\u0002\u0159\u015a",
    "\u0007m\u0002\u0002\u015an\u0003\u0002\u0002\u0002\u015b\u015c\u0007",
    "e\u0002\u0002\u015c\u015d\u0007q\u0002\u0002\u015d\u015e\u0007p\u0002",
    "\u0002\u015e\u015f\u0007v\u0002\u0002\u015f\u0160\u0007k\u0002\u0002",
    "\u0160\u0161\u0007p\u0002\u0002\u0161\u0162\u0007w\u0002\u0002\u0162",
    "\u0163\u0007g\u0002\u0002\u0163p\u0003\u0002\u0002\u0002\u0164\u0165",
    "\u0007i\u0002\u0002\u0165\u0166\u0007q\u0002\u0002\u0166\u0167\u0007",
    "v\u0002\u0002\u0167\u0168\u0007q\u0002\u0002\u0168r\u0003\u0002\u0002",
    "\u0002\u0169\u016a\u0007h\u0002\u0002\u016a\u016b\u0007q\u0002\u0002",
    "\u016b\u016c\u0007t\u0002\u0002\u016ct\u0003\u0002\u0002\u0002\u016d",
    "\u016e\u0007o\u0002\u0002\u016e\u016f\u0007c\u0002\u0002\u016f\u0170",
    "\u0007v\u0002\u0002\u0170\u0171\u0007e\u0002\u0002\u0171\u0172\u0007",
    "j\u0002\u0002\u0172v\u0003\u0002\u0002\u0002\u0173\u0174\u0007g\u0002",
    "\u0002\u0174\u0175\u0007p\u0002\u0002\u0175\u0176\u0007w\u0002\u0002",
    "\u0176\u0177\u0007o\u0002\u0002\u0177x\u0003\u0002\u0002\u0002\u0178",
    "\u017d\u0007$\u0002\u0002\u0179\u017c\u0005{>\u0002\u017a\u017c\n\b",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017b\u017a\u0003\u0002",
    "\u0002\u0002\u017c\u017f\u0003\u0002\u0002\u0002\u017d\u017b\u0003\u0002",
    "\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002\u017e\u0180\u0003\u0002",
    "\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u0180\u018b\u0007$",
    "\u0002\u0002\u0181\u0186\u0007b\u0002\u0002\u0182\u0185\u0005{>\u0002",
    "\u0183\u0185\n\t\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184",
    "\u0183\u0003\u0002\u0002\u0002\u0185\u0188\u0003\u0002\u0002\u0002\u0186",
    "\u0184\u0003\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187",
    "\u0189\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0189",
    "\u018b\u0007b\u0002\u0002\u018a\u0178\u0003\u0002\u0002\u0002\u018a",
    "\u0181\u0003\u0002\u0002\u0002\u018bz\u0003\u0002\u0002\u0002\u018c",
    "\u0190\u0007^\u0002\u0002\u018d\u0191\t\n\u0002\u0002\u018e\u0191\u0005",
    "}?\u0002\u018f\u0191\u0005\u007f@\u0002\u0190\u018d\u0003\u0002\u0002",
    "\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0190\u018f\u0003\u0002\u0002",
    "\u0002\u0191|\u0003\u0002\u0002\u0002\u0192\u0193\u0007w\u0002\u0002",
    "\u0193\u0194\u0005\u0081A\u0002\u0194\u0195\u0005\u0081A\u0002\u0195",
    "\u0196\u0005\u0081A\u0002\u0196\u0197\u0005\u0081A\u0002\u0197~\u0003",
    "\u0002\u0002\u0002\u0198\u0199\u0007z\u0002\u0002\u0199\u019a\u0005",
    "\u0081A\u0002\u019a\u019b\u0005\u0081A\u0002\u019b\u0080\u0003\u0002",
    "\u0002\u0002\u019c\u019d\t\u000b\u0002\u0002\u019d\u0082\u0003\u0002",
    "\u0002\u0002\u019e\u019f\u0007&\u0002\u0002\u019f\u0084\u0003\u0002",
    "\u0002\u0002\u01a0\u01ab\u0005\u0007\u0004\u0002\u01a1\u01a5\u0005\u0005",
    "\u0003\u0002\u01a2\u01a4\t\f\u0002\u0002\u01a3\u01a2\u0003\u0002\u0002",
    "\u0002\u01a4\u01a7\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002",
    "\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a8\u0003\u0002\u0002",
    "\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a8\u01a9\u0005\u0005\u0003",
    "\u0002\u01a9\u01ab\u0003\u0002\u0002\u0002\u01aa\u01a0\u0003\u0002\u0002",
    "\u0002\u01aa\u01a1\u0003\u0002\u0002\u0002\u01ab\u0086\u0003\u0002\u0002",
    "\u0002\u0018\u0002\u0088\u008c\u0091\u0095\u0099\u009e\u00a4\u00a9\u00ac",
    "\u00bc\u00cc\u00cf\u00d6\u017b\u017d\u0184\u0186\u018a\u0190\u01a5\u01aa",
    "\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LuxLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LuxLexer.prototype = Object.create(antlr4.Lexer.prototype);
LuxLexer.prototype.constructor = LuxLexer;

LuxLexer.EOF = antlr4.Token.EOF;
LuxLexer.NUMBER = 1;
LuxLexer.ENDL = 2;
LuxLexer.MLCOMMENT = 3;
LuxLexer.COMMENT = 4;
LuxLexer.WS = 5;
LuxLexer.COLON = 6;
LuxLexer.LPAREN = 7;
LuxLexer.RPAREN = 8;
LuxLexer.LCURL = 9;
LuxLexer.RCURL = 10;
LuxLexer.LSQUARE = 11;
LuxLexer.RSQUARE = 12;
LuxLexer.COMMA = 13;
LuxLexer.ARROW = 14;
LuxLexer.OPASSIGN = 15;
LuxLexer.OPEQ = 16;
LuxLexer.OPUNEQ = 17;
LuxLexer.SEMIC = 18;
LuxLexer.OPPLUS = 19;
LuxLexer.OPMOVE = 20;
LuxLexer.OPINC = 21;
LuxLexer.OPDEC = 22;
LuxLexer.OPAPLUS = 23;
LuxLexer.OPAMINUS = 24;
LuxLexer.OPADIV = 25;
LuxLexer.OPAMULT = 26;
LuxLexer.OPAMOD = 27;
LuxLexer.OPMINUS = 28;
LuxLexer.OPMULT = 29;
LuxLexer.OPDIV = 30;
LuxLexer.OPMOD = 31;
LuxLexer.OPNAV = 32;
LuxLexer.OPCOAL = 33;
LuxLexer.OPSAFENAV = 34;
LuxLexer.OPQUEST = 35;
LuxLexer.OPREF = 36;
LuxLexer.OPRANGE = 37;
LuxLexer.OPSKIP = 38;
LuxLexer.OPELIPSE = 39;
LuxLexer.AND = 40;
LuxLexer.OR = 41;
LuxLexer.NOT = 42;
LuxLexer.GT = 43;
LuxLexer.LT = 44;
LuxLexer.GTE = 45;
LuxLexer.LTE = 46;
LuxLexer.CLASS = 47;
LuxLexer.RETURN = 48;
LuxLexer.IF = 49;
LuxLexer.ELSE = 50;
LuxLexer.BREAK = 51;
LuxLexer.CONTINUE = 52;
LuxLexer.GOTO = 53;
LuxLexer.FOR = 54;
LuxLexer.MATCH = 55;
LuxLexer.ENUM = 56;
LuxLexer.STRING = 57;
LuxLexer.MACRO = 58;
LuxLexer.ID = 59;

LuxLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LuxLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LuxLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                    "':'", "'('", "')'", "'{'", "'}'", "'['", 
                                    "']'", "','", "'=>'", "'='", "'=='", 
                                    "'!='", "';'", "'+'", "'->'", "'++'", 
                                    "'--'", "'+='", "'-='", "'/='", "'*='", 
                                    "'%='", "'-'", "'*'", "'/'", "'%'", 
                                    "'.'", "'??'", "'?.'", "'?'", "'&'", 
                                    "'~'", "'_'", "'...'", "'and'", "'or'", 
                                    "'!'", "'>'", "'<'", "'>='", "'<='", 
                                    "'class'", "'return'", "'if'", "'else'", 
                                    "'break'", "'continue'", "'goto'", "'for'", 
                                    "'match'", "'enum'", null, "'$'" ];

LuxLexer.prototype.symbolicNames = [ null, "NUMBER", "ENDL", "MLCOMMENT", 
                                     "COMMENT", "WS", "COLON", "LPAREN", 
                                     "RPAREN", "LCURL", "RCURL", "LSQUARE", 
                                     "RSQUARE", "COMMA", "ARROW", "OPASSIGN", 
                                     "OPEQ", "OPUNEQ", "SEMIC", "OPPLUS", 
                                     "OPMOVE", "OPINC", "OPDEC", "OPAPLUS", 
                                     "OPAMINUS", "OPADIV", "OPAMULT", "OPAMOD", 
                                     "OPMINUS", "OPMULT", "OPDIV", "OPMOD", 
                                     "OPNAV", "OPCOAL", "OPSAFENAV", "OPQUEST", 
                                     "OPREF", "OPRANGE", "OPSKIP", "OPELIPSE", 
                                     "AND", "OR", "NOT", "GT", "LT", "GTE", 
                                     "LTE", "CLASS", "RETURN", "IF", "ELSE", 
                                     "BREAK", "CONTINUE", "GOTO", "FOR", 
                                     "MATCH", "ENUM", "STRING", "MACRO", 
                                     "ID" ];

LuxLexer.prototype.ruleNames = [ "NUMBER", "ALPHANUM", "ALPHA", "DIGIT", 
                                 "ENDL", "MLCOMMENT", "COMMENT", "WS", "COLON", 
                                 "LPAREN", "RPAREN", "LCURL", "RCURL", "LSQUARE", 
                                 "RSQUARE", "COMMA", "ARROW", "OPASSIGN", 
                                 "OPEQ", "OPUNEQ", "SEMIC", "OPPLUS", "OPMOVE", 
                                 "OPINC", "OPDEC", "OPAPLUS", "OPAMINUS", 
                                 "OPADIV", "OPAMULT", "OPAMOD", "OPMINUS", 
                                 "OPMULT", "OPDIV", "OPMOD", "OPNAV", "OPCOAL", 
                                 "OPSAFENAV", "OPQUEST", "OPREF", "OPRANGE", 
                                 "OPSKIP", "OPELIPSE", "AND", "OR", "NOT", 
                                 "GT", "LT", "GTE", "LTE", "CLASS", "RETURN", 
                                 "IF", "ELSE", "BREAK", "CONTINUE", "GOTO", 
                                 "FOR", "MATCH", "ENUM", "STRING", "ESC", 
                                 "UNICODE", "SINGLECHARHEX", "HEX", "MACRO", 
                                 "ID" ];

LuxLexer.prototype.grammarFileName = "LuxLexer.g4";



exports.LuxLexer = LuxLexer;

