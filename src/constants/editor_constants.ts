export const LANGUAGE: Record<string, string> = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  dart: "3.2.4",
};

export const CODE_SNIPPETS: Record<string, string> = {
  javascript:
    '\nfunction app(name){\n\tconsole.log("Hello " + name + "!");\n}\n\napp("Usmon");\n',
  python: '\ndef app(name):\n\tprint("Hello " + name + "!")\n\napp("Usmon")',
  dart: '\nvoid main() {\n\tprint("Hello world");\n}',
  java: '\npublic class HelloWorld {\n\tpublic static void main(String[], args) {\n\t\tSystem.out.println("Hello world");\n\t} \n\t\n}\n',
};
