import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import './styles.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const xterm = useRef(null);

  useEffect(() => {
    const term = new Terminal();
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();
    term.write('Welcome to Xterm.js!\r\n');

    xterm.current = term;

    window.addEventListener('resize', () => {
      fitAddon.fit();
    });

    return () => {
      term.dispose();
      window.removeEventListener('resize', () => {
        fitAddon.fit();
      });
    };
  }, []);

  return <div ref={terminalRef} className="terminal-container"></div>;
};

export default TerminalComponent;
