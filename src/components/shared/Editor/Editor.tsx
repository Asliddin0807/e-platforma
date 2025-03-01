import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import Output from "@/components/shared/Editor/Output";
import ProgLanguages from "@/components/shared/Editor/Prog_lang";
import { CODE_SNIPPETS } from "@/constants/editor_constants";
import { execute } from "@/Services/code_api";
import Icons from "@/components/shared/Icons/Icons";
import { editor } from "monaco-editor";

export default function Editors() {
  const [selectLang, setSelectLang] = useState<string>("javascript");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const [value, setValue] = useState<string>("");

  const [output, setOutput] = useState(null);
  const [load, setLoad] = useState<boolean>(false);

  const onMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setSelectLang(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const runCode = async () => {
    const sourceCode = editorRef.current ? editorRef.current.getValue() : "";

    if (!sourceCode) return;

    try {
      setLoad(true);
      const { run: result } = await execute(selectLang, sourceCode);
      setOutput(result.output);
    } catch (err) {
      alert(err);
    } finally {
      setLoad(false);
    }
  };
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={10}>
      <Box
        display="flex"
        flexDirection={{ base: "row", md: "row" }}
        justifyContent="space-between"
        alignItems={'center'}
        gap={4}
      >
        <ProgLanguages language={selectLang} onSelect={onSelect} />
        <Button
          mr={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
          colorScheme="green"
          onClick={runCode}
          loading={load}
        >
          <Icons iconName="BiPlay" /> Run code
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
        mt={4}
      >
        <Editor
          height="83vh"
          width={isMobile ? "100%" : "50%"}
          language={selectLang}
          defaultValue={CODE_SNIPPETS[selectLang]}
          theme="vs-dark"
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value ?? "")}
        />
        <Output output={output} />
      </Box>
    </Box>
  );
}
