import AOS from 'aos';
import 'aos/dist/aos.css';
import line from './assets/line.svg'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import proj1 from './assets/proj1.png'
import design1 from './assets/proj1/design1.png';
import design2 from './assets/proj1/design2.png';
import design3 from './assets/proj1/design3.png';
import design4 from './assets/proj1/design4.png';
import imp from './assets/proj1/imp.png';
import imp1 from './assets/proj1/imp1.png';
import research1 from './assets/proj1/research1.png';
import research2 from './assets/proj1/research2.png';
import ui1 from './assets/proj1/ui1.png';

function CpuProj() {
  useEffect(()=> {
    AOS.init({
      duration: 800,
      easing: 'ease',
    });
  },[]);
  return(
    <>
      <div className='navbar' data-aos="slide-down" data-aos-once='true'>
      <Link to={'/'}>
        <h1>home</h1>
      </Link>
      <Link to={'/#projects'}>
        <h1>projects</h1>
      </Link>
      <Link to={'/about'}>
        <h1>about</h1>
      </Link>
      <div className='scroll-container proj'>
        <img src={line} className='line' alt='line' /> 
        <img src={line} className='line' alt='line' />
        <img src={line} className='line' alt='line' />
      </div>
    </div>
      <div className="project-page">
        <h2><a style={{textDecoration: 'underline'}} href='/cpu-flow' target='_blank'>RISC-V Processor Simulator</a></h2>
        <h3>Tools</h3>
        <p>React, TypeScript, Computer Architecture, RISC-V ISA, Digital Logic Design</p>
        <h3>Features</h3>
        <h4>Interactive Instruction Execution:</h4>
        <p>Step through each part of an instruction's execution (instruction fetch, instruction decode, execute, memory access, register write back) to observe how data flows through the CPU.</p>
        <h4>Data Path Visualization:</h4>
        <p>Animates data transfers between functional units, making it easier to understand how components interact during instruction execution.</p>
        <h4>Modular Components:</h4>
        <p>Each core component of the processor (e.g., ALU, register list, memory blocks) is implemented as an independent module for clarity and flexibility.</p>
        <a className='proj-img' href={"https://eduardosanchez.dev/cpu-flow"} target='_blank'>
          <img src={proj1} alt="project pic" />
        </a>
        <img src={line} className='line' alt='line' />

        <h3>Project Process</h3>
        <h4>Research</h4>
        <p>I started with the textbook Computer Organization and Design RISC-V Edition by David Patterson and John Hennessy, along with the <a href="https://riscv.org/wp-content/uploads/2017/05/riscv-spec-v2.2.pdf" target="_blank" style={{textDecoration: 'underline'}}>RISC-V instruction set manual</a>. These gave me a solid understanding of the RISC-V instructions, basic CPU design and digital design concepts. I focused on learning how data paths, control signals, and memory elements interact in a processor, which was needed to build each component in the simulator.</p>
        <img src={line} className='line' alt='line' />
        <h4>Design</h4>
        <p>With the background knowledge, I built upon the example CPU given in the textbook to implement my own CPU that was more capable and could execute all of the RISC-V base instructions. The design of the extensions I added to the example processor are shown below.</p>
        <img src={design1} alt="initial design" className='proj-img sub' />
        <img className='proj-img sub' src={imp} alt="paper design" />
        <p>Next, I focused on the design of the individual components, implementing digital logic using TypeScript. First was the operation-based components: the ALU, adder, and multiplexers. The ALU was control-based, capable of switching operations according to the control signals it received.</p>
        <p>To set up the memory blocks, I designed two data structures to handle different needs. One was byte-addressable, allowing for reading and writing in 1, 2, or 4-byte chunks, which was essential for implementing every load and store instruction to memory. The other structure was optimized for 32-bit values, used specifically for the registers and instructions, making access straightforward and efficient.</p>
        <img src={design2} alt="mem design" className='proj-img sub' />
        <p>For the instruction decode unit, I defined look up tables to decode the instruction identifiers(opcode, f3, f7 and immediate values) from the instruction according to the RISC-V ISA. This decoding step ensures that every instruction is interpreted correctly and the correct signals are sent to the components, so the simulator can handle the full instruction set without error.</p>
        <img src={design3} alt="decode design" className='proj-img sub' />
        <img src={design4} alt="decode design 2" className='proj-img sub' />
        <h4>Implementation</h4>
        <p>I used <a href="https://reactflow.dev/" target="_blank" style={{textDecoration: 'underline'}}>React Flow</a> to manage the data flow between components visually. React Flow allowed me to create a clear, interactive representation of the processor's structure, making it easier to track how data moved through the CPU for each instruction cycle. This tool made it simple to set up and visualize connections between components like the ALU, control units, and memory, and it allowed for smooth updates as I refined each part of the simulator.</p>
        <a className='proj-img-link' href={"https://reactflow.dev/"} target='_blank'>
          <img className='proj-img sub' src={imp1} alt="react flow" />
        </a>
        <img src={line} className='line' alt='line' />
        <h4>UI</h4>
        <p>I created an interactive clock that users can step through to see each phase of instruction execution in real-time. Users also have the ability to modify instructions, adjust register values, and change memory contents directly, giving them a hands-on approach to learning.</p>
        <p>I designed all the UI elements in Figma to keep things clear, visually appealing, and easy to follow, so the data flow and component interactions are simple to understand.</p>
        <img className='proj-img sub' src={ui1} alt="figma ui" />
      </div>
    </>
  );
}

export default CpuProj